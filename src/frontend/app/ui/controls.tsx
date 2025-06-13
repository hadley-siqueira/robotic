import AngleControls from './angle-controls.tsx'
import XYZControls from './xyz-controls.tsx'
import './controls.css'

export default function Controls({ glRef }) {
    return (
        <div className="controls">
            <AngleControls glRef={glRef} />
            <XYZControls glRef={glRef} />
        </div>
    )
}

