'use client'
 
import { useState } from 'react'
import ControlButton from './control-button.tsx'
import './angle-controls.css'

export default function AngleControls() {
    return (
        <div className="angle-controls">
            <p>Base</p>
            <ControlButton icon="left" />
            <ControlButton icon="up" />
            <ControlButton icon="right" />

            <p>Elo 1</p>
            <ControlButton icon="left" />
            <ControlButton icon="up" />
            <ControlButton icon="right" />

            <p>Elo 2</p>
            <ControlButton icon="left" />
            <ControlButton icon="up" />
            <ControlButton icon="right" />

            <p>Ponta</p>
            <ControlButton icon="left" />
            <ControlButton icon="up" />
            <ControlButton icon="right" />
        </div>
    )
}
