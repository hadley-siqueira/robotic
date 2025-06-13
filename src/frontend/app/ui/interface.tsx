'use client'

import RenderingCanvas from "./rendering-canvas.tsx"
import Controls from "./controls.tsx"
import Logs from "./logs.tsx"
import Positions from "./positions.tsx"
import Status from "./status.tsx"
import "./interface.css"
import { useRef } from 'react';

export default function Interface() {
    const canvasRef = useRef(null)
    const glRef = useRef(null)

    return (
        <div className="interface">
            <RenderingCanvas canvasRef={canvasRef} glRef={glRef} />
            <Status />
            <Controls glRef={glRef} />
            <Logs />
            <Positions />
        </div>
    )
}
