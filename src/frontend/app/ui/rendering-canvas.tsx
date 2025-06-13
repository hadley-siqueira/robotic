'use client'

import { useEffect } from 'react';
import './rendering-canvas.css'
import startWebGLForContext from './../webgl/webgl.js'

export default function RenderingCanvas({ canvasRef, glRef }) {
    useEffect(() => {
        glRef.current = canvasRef.current.getContext("webgl")
        startWebGLForContext(glRef.current)
    })

    return (
        <div className="rendering-canvas">
          <canvas id="glcanvas" ref={canvasRef}></canvas>
        </div>
    )
}

