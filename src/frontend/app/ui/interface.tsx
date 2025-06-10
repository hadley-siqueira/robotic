import RenderingCanvas from "./rendering-canvas.tsx"
import Controls from "./controls.tsx"
import Logs from "./logs.tsx"
import Positions from "./positions.tsx"
import Status from "./status.tsx"
import "./interface.css"

export default function Interface() {
    return (
        <div className="interface">
            <RenderingCanvas />
            <Status />
            <Controls />
            <Logs />
            <Positions />
        </div>
    )
}
