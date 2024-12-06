import React, { useState, useEffect } from 'react'

const WIDTH = 50

export default function Cell (props) {
  const [type, setType] = useState('')
  const key = `cell${props.x}${props.y}`

  useEffect(() => {
    if (key in props.types) setType(props.types[key])
  }, [props.types, key])

  const click = () => {
    console.log('click')
  }

  return (
    <div
      onClick={click}
      className={'cell ' + type}
      style={{ top: WIDTH * props.x + 'px', left: WIDTH * props.y + 'px' }}
    >
      <>{props.x + '' + props.y}</>
    </div>
  )
}
