import AngleControls from './angle-controls.tsx'
import XYZControls from './xyz-controls.tsx'
import './controls.css'

export default function Controls({ ctxRef }) {
    return (
        <div className="controls">
            <AngleControls ctxRef={ctxRef} />
            <XYZControls ctxRef={ctxRef} />
        </div>
    )
}

