'use client'
 
import { useState } from 'react'
import ControlButton from './control-button.tsx'
import './angle-controls.css'
import { setAnglesDelta } from '../canvas/canvas.js'

export default function AngleControls({ glRef }) {
    let [baseAngle, setBaseAngle] = useState(5)

    function updateAngles() {
        setAnglesDelta([5, 0, 0, 0])
    }

    function decreaseBaseAngle() {
        setAnglesDelta([-baseAngle, 0, 0, 0])
    }

    function increaseBaseAngle() {
        setAnglesDelta([baseAngle, 0, 0, 0])
    }

    return (
        <div className="angle-controls">
            <p>Base</p>
            <ControlButton icon="left" action={decreaseBaseAngle} />
            <input 
                type="text" 
                className="control-input" 
                value={baseAngle} 
                onChange={(e) => setBaseAngle(parseFloat(e.target.value)) }
            />
            <ControlButton icon="right" action={increaseBaseAngle} />

            <p>Elo 1</p>
            <ControlButton icon="left" />
            <input type="text" className="control-input" />
            <ControlButton icon="right" />

            <p>Elo 2</p>
            <ControlButton icon="left" />
            <input type="text" className="control-input" />
            <ControlButton icon="right" />

            <p>Ponta</p>
            <ControlButton icon="left" />
            <input type="text" className="control-input" />
            <ControlButton icon="right" />
        </div>
    )
}
