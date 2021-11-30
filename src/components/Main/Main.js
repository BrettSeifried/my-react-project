import React from 'react'
import './Main.css'
import background from '../../background.jpg'
import { zodiac } from '../../data'
import Zodiac from '../Zodiac/Zodiac'

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((signs) => (
        <Zodiac key={signs.id} name={signs.name} date={signs.dates} />
      ))}
    </main>
  )
}
