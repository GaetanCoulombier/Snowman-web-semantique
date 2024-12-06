import pkgStardog from 'stardog'
import { uriToId } from './utils.js'

import { username, password, endpoint } from './stardogConfig.js'

const { Connection, query } = pkgStardog

const conn = new Connection({
  username: username,
  password: password,
  endpoint: endpoint
})


//---------------------------------------------------------------
export function getPlayer() {
  const queryString = 'select ?player where { ?player a :CellPlayer }'
  const database = 'snowman'

  return query
    .execute(conn, database, queryString, 'application/sparql-results+json', {
      limit: 10,
      reasoning: true,
      offset: 0
    })
    .then(res => {
      if (!res.ok) throw res.statusText
      return res.body.results.bindings
    })
    .then(res => uriToId(res[0].player.value))
}
