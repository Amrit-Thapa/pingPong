
let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 4;

let paddle1Y = 250;
const PADDLE_HEIGHT = 100;

const calculateMouseMovement = (evt) => {
    const rect = canvas.getBoundingClientRect();
    const root= document.documentElement;
    const mouseX = evt.clientX - rect.left - root.scrollLeft;
    const mouseY = evt.clientY - rect.top - root.scrollTop;

    return {x: mouseX, y: mouseY}; 
}

window.onload = () => {
    canvas = document.getElementById("pingPongGame");
    canvasContext = canvas.getContext("2d");
    const FPS = 40;
    setInterval(() => {setMovement(); setBall()}, 1000/ FPS);
    canvas.addEventListener("mousemove", (evt) => {
        const mouseMovement = calculateMouseMovement(evt);
        paddle1Y = mouseMovement.y - (PADDLE_HEIGHT / 2);
    })
}

const setMovement = () => {
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    if (ballX >= canvas.width || ballX <= 0) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY >= canvas.height || ballY <= 0) {
        ballSpeedY = -ballSpeedY; 
    } 
};

const setBall = () => {
    drawRect(0, 0, canvas.width, canvas.height, "black");
    drawRect(0, paddle1Y, 20, PADDLE_HEIGHT, "white");
    drawCircle(ballX, ballY, 20, "red");
};

const drawRect = (leftX, topY, width, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX, topY, width, height);
}

const drawCircle = (centerX, centerY, radius, color) => {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}