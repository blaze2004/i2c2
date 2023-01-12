import React, { useState, useEffect } from 'react'
import './scratch-card.css'

const ScratchCard = () => {
    const [scratched, setScratched] = useState(false)
  
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (e.buttons === 1) {
                setScratched(true)
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
  
    return (
        <div className={`scratch-card ${scratched ? 'scratched' : ''}`}>
            {scratched ? 'You Win!!!' : 'Scratch to reveal'}
        </div>
    )
}

export default ScratchCard