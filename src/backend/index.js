const { SerialPort } = require('serialport')

const express = require('express')
const cors = require("cors");

const app = express()
app.use(cors());

const port = 3000

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

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})
