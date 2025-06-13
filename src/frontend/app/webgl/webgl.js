export default function startWebGLForContext(gl) {
    if (!gl) {
        alert("WebGL not supported!")
        return
    }

    useShaders(gl, vertexShaderSource, fragmentShaderSource)
}

// Vertex Shader
const vertexShaderSource = `
    attribute vec4 aPosition;
    uniform mat4 uMatrix;

    void main() {
        gl_Position = uMatrix * aPosition;
    }
`

// Fragment Shader
const fragmentShaderSource = `
    precision mediump float;
    uniform vec4 uColor;

    void main() {
        gl_FragColor = uColor;
    }
`

function createShader(gl, type, source) {
    let shader = gl.createShader(type);

    gl.shaderSource(shader, source)
    gl.compileShader(shader)

    let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)

    if (success) {
        return shader
    }
 
    console.log(gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
}

function createProgram(gl, vertexShaderSource, fragmentShaderSource) {
    let program = gl.createProgram()

    let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    let success = gl.getProgramParameter(program, gl.LINK_STATUS)

    if (success) {
        return program
    }

    console.log(gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
}

function useShaders(gl, vertexShaderSource, fragmentShaderSource) {
    let program = createProgram(gl, vertexShaderSource, fragmentShaderSource)

    if (program) {
        gl.useProgram(program)
        console.log("using gl program: ok")
    }
}

