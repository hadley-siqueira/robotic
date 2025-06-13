'use client'
 
import { useState } from 'react'
import ControlButton from './control-button.tsx'
import './angle-controls.css'

export default function AngleControls({ glRef }) {
    return (
        <div className="angle-controls">
            <p>Base</p>
            <ControlButton icon="left" />
            <input type="text" className="control-input" />
            <ControlButton icon="right" />

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
