import AngleControls from './angle-controls.tsx'
import XYZControls from './xyz-controls.tsx'
import './controls.css'

export default function Controls() {
    return (
        <div className="controls">
            <AngleControls />
            <XYZControls />
        </div>
    )
}

