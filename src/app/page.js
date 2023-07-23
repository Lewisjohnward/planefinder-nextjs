'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {

    useEffect(() => {
        if (window.navigator.geolocation){
            window.navigator.geolocation.getCurrentPosition(console.log, console.log)
        }
    }, [])



  return (
    <main className="h-screen flex justify-center">
    </main>
  )
}
