'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [accuracy, setAccuracy] = useState(null)
    const [timestamp, setTimestamp] = useState(null)

    const getLocation = () => {
        window.navigator.geolocation.getCurrentPosition(({coords : { latitude, longitude, accuracy }, timestamp}) => {
            setLatitude(latitude)
            setLongitude(longitude)
            setAccuracy(accuracy)
            setTimestamp(new Date(timestamp))
        }, console.log)
    }

    useEffect(() => {
        if (window.navigator.geolocation){
            getLocation()
        }
    }, [])



    return (
        <main className="h-screen flex justify-center items-center">
            { latitude &&
            <div className="rounded p-4 border border-black shadow">
                <p>
                    latitude: {latitude}
                </p>
                <p>
                    longitube: {longitude}
                </p>
                <p>
                    accuracy: {accuracy}
                </p>
                <p>
                    time : {timestamp.toISOString()}
                </p>
            </div>
            }
        </main>
    )
}
