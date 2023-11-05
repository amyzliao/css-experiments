import Image from 'next/image'
import React from 'react'

import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main>
      <img src="/homepic.jpg" />
      <h4>AMY LIAO</h4>
      <Navbar/>
    </main>
  )
}
