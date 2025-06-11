'use client'

import { useEffect } from 'react';
import './rendering-canvas.css'
import startWebGLForContext from './../webgl/webgl.js'

export default function RenderingCanvas({ canvasRef, ctxRef }) {
    useEffect(() => {
        ctxRef.current = canvasRef.current.getContext("webgl")
        startWebGLForContext(ctxRef.current)
    })

    return (
        <div className="rendering-canvas">
          <canvas id="glcanvas" ref={canvasRef}></canvas>
        </div>
    )
}

