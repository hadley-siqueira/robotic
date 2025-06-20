const { SerialPort } = require('serialport')
const { WebSocket } = require('ws')

const express = require('express')
const cors = require("cors");

const app = express()
app.use(cors({origin: '*'}))
app.use(express.json())

const port = 3000

let users = []

// conection to serial port
let currentConnection = null;

// endpoints
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// API serial
app.get("/ports", async (req, res) => {
    try {
        const ports = await SerialPort.list();
        res.json(ports.map((p) => p.path));
    } catch (err) {
        res.status(500).json({ 
            error: "Erro ao listar portas seriais"
        });
    }
});

app.post("/connect", async (req, res) => {
    const { path: portPath } = req.body;

    try {
        if (currentConnection && currentConnection.isOpen) {
            currentConnection.close();
        }

        currentConnection = new SerialPort({ 
            path: portPath, 
            baudRate: 9600 
        });

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({
            error: "Falha ao conectar à porta" 
        });
    }
});

let motors = [
    {
        stepsPerTurn: 3200,
        reduction: 38,
        angle: 0,
        steps: 0,
        length: 90,

    },
    {
        stepsPerTurn: 3200,
        reduction: 38,
        angle: 0,
        steps: 0,
        length: 140,
    },
    {
        stepsPerTurn: 3200,
        reduction: 38,
        angle: 0,
        steps: 0,
        length: 115,
    },
    {
        stepsPerTurn: 3200,
        reduction: 38,
        angle: 0,
        steps: 0,
        length: 100,
    }
]

/*T 360
x  y

360x = Ty
x = Ty/360*/

app.post("/angle/delta", (req, res) => {
    let motor = req.body.motor
    let angle = req.body.value

    console.log(angle)

    //motors[motor].goToAngleDelta(angle)
    /* arm.goToAngleDelta(motor, angle, (arm) => {
     *     wss.clients.forEach((client) => {
     *         if (client.readyState === WebSocket.OPEN) {
     *             let payload = {
     *                 type: 'updateInfo',
     *                 info: arm.getStatus()
     *             }
     *
     *             client.send(JSON.stringify(payload)
     *         }
     *     })
     * })
     */
})

const server = app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})

let wss = new WebSocket.Server({ server: server })

wss.on('connection', (ws) => {
    console.log('New connection via ws')

   /* wss.clients.forEach((client) => {
        if (client === ws && client.readyState === WebSocket.OPEN) {
            let payload = {
                type: 'setAngle',
                angles: [45, 0, 0, 0]
            }

            let i = 0

            let ff = () => {
                payload.angles[0] = i
                i = i + 1
                client.send(JSON.stringify(payload))
                if (i < 45) {
                    setTimeout(ff, 135)
                }
            }

            ff()
        }
    })*/
})
