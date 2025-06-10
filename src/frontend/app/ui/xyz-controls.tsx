import ControlButton from './control-button.tsx'
import './xyz-controls.css'

export default function XYZControls() {
    return (
        <div className="xyz-controls">
            <div style={{gridArea: 'x-up'}}>
                <ControlButton icon="up" />
            </div>

            <div style={{gridArea: 'x-down'}}>
                <ControlButton icon="down" />
            </div>

            <div style={{gridArea: 'z-left'}}>
                <ControlButton icon="left" />
            </div>

            <div style={{gridArea: 'z-right'}}>
                <ControlButton icon="right" />
            </div>

            <input type="text" className="myInput" style={{gridArea: 'xz-input'}} />

            <div style={{gridArea: 'y-up'}}>
                <ControlButton icon="up" />
            </div>

            <div style={{gridArea: 'y-down'}}>
                <ControlButton icon="down" />
            </div>

            <input type="text" className="myInput" style={{gridArea: 'y-input'}} />
        </div>
    )
}
