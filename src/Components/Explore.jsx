import React, { useContext } from 'react'
import Navbar from './UiElements/Navbar'
import Footer from './UiElements/Footer'
import { Theme } from '../Context/Theme'

export default function Explore() {
    const [isDark,changetheme] = useContext(Theme)
    return (
    <>
    <Navbar></Navbar>
    <div className={`${
        isDark ? "bg-neutral-900 text-white" : "bg-neutral-100 text-gray-800"
      } h-dvh font-[Sacramento] flex items-center justify-center text-7xl`}>Explore</div>
    <Footer></Footer>
    </>
  )
}
