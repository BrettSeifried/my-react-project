import React from 'react'
import './Zodiac.css'

export default function Zodiac(signs) {
  return (
    <div className="Zodiac">
      <img alt={signs.name} src={`${process.env.PUBLIC_URL}/assets/${signs.name}.png`} />
      <span className="name">{signs.name}</span>
      <span className="date">{signs.date}</span>
    </div>
  )
}
