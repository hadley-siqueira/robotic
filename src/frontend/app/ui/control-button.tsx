'use client'
 
import { useState } from 'react'
import Chevron from './../icons/chevron.tsx'
import './control-button.css'
 
export default function ControlButton({ icon, action }) {
    return (
        <button className="control-button" onClick={action} >
            <Chevron icon={icon} />
        </button>
    )
}

