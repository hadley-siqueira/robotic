'use client'

import { useEffect } from 'react'
import './rendering-canvas.css'
import { configureCanvas } from '../canvas/canvas.js'


export default function RenderingCanvas({ canvasRef, glRef }) {
    useEffect(() => {
        configureCanvas(canvasRef)
    })

    return (
        <div className="rendering-canvas">
          <canvas id="glcanvas" ref={canvasRef}></canvas>
        </div>
    )
}

