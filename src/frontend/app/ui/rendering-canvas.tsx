'use client'

import { useEffect } from 'react'
import './rendering-canvas.css'
import { configureCanvas } from '../canvas/canvas.js'
import { setAngles } from '../canvas/canvas.js'


export default function RenderingCanvas({ canvasRef, glRef }) {
    useEffect(() => {
        configureCanvas(canvasRef)
        let webSocket = new WebSocket('ws://localhost:3000');

        webSocket.addEventListener('message', (event) => {
            let obj = JSON.parse(event.data)

            if (obj.type === 'setAngle') {
                setAngles(obj.angles)
            }
        })
    })

    return (
        <div className="rendering-canvas">
          <canvas id="glcanvas" ref={canvasRef}></canvas>
        </div>
    )
}

