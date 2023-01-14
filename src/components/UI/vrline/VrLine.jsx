import React from 'react'
import cl from './VrLine.module.css'

function VrLine({height, borderWidth}) {
  return (
    <div
        className={cl['vr-line']}
        style={{
            height: height,
            borderWidth: borderWidth
        }}
    />
  )
}

export default VrLine