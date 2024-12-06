import React, { useState, useEffect } from 'react'
import { getPlayer } from '../API/stardog'

import Cell from './Cell'

const SIZE = 10

export default function Grid () {
  const [types, setTypes] = useState({})

  useEffect(() => {
    getPlayer().then(player => {
      console.log('player', player)
      let tab = []
      tab[player] = 'player'
      setTypes(tab)
    })
  }, [])

  const cells = Array(SIZE * SIZE)
    .fill()
    .map((element, index) => (
      <Cell key={index} types={types} x={Math.floor(index / 10)} y={index % 10} />
    ))

  return <>{cells}</>
}
