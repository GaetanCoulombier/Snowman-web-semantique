import { getPlayer } from './stardog.js'

getPlayer()
  .then(console.log)
  .catch(console.error)