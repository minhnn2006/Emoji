let canvas = document.getElementById("ThuCanvas");
/**
 * @param {*} canvas
 * @returns {CanvasRenderingContext2D}
 * 
 */

function createPen(canvas){
    return canvas.getContext("2d")
}
var ctx = createPen(canvas);


ctx.arc(300, 300, 40, 0, 2 * Math.PI);

ctx.fillStyle ="#ffcf5b";
ctx.fill();
ctx.stroke();





ctx.beginPath();
ctx.arc(280, 285, 7, 0, 2 * Math.PI);
ctx.fillStyle="white";
ctx.fill();
ctx.stroke();
    
ctx.beginPath();
ctx.arc(320, 285, 7, 0, 2 * Math.PI);
ctx.fillStyle="white"
ctx.fill();
ctx.stroke();
    ctx.beginPath();
    ctx.arc(280, 285, 3.5, 0, 2 * Math.PI);
    ctx.fillStyle="black";
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(320, 285, 3.5, 0, 2 * Math.PI);
    ctx.fillStyle="black";
    ctx.fill();
    ctx.stroke();

ctx.beginPath();
ctx.arc(300, 300, 20, 0, Math.PI, false);
ctx.closePath();
ctx.lineWidth = 1;
ctx.fillStyle = '#E97451';
ctx.fill();
ctx.stroke();

const FPS = 3.5;
let startFrameTime = Date.now();
let moMat = true;
let pen = myCanvas.getContext("2d");

// canvas.addEventListener('mousemove', (event)=>{
//     pen.clearRect(0, 0, WIDTH, HEIGHT);
//     let currentFrameTime = Date.now();
//     let deltaTime = currentFrameTime - startFrameTime;
//     let actualFPS = 1000 / deltaTime;
//     pen.textStyle = "20px Arial";
//     pen.fillText("FPS: " + actualFPS.toFixed(2), 10, 20);
//     startFrameTime = currentFrameTime;

//     drawFace(moMat)
//     console.log(startFrameTime);
// },
function gameLoop() {
    pen.clearRect(0, 0, WIDTH, HEIGHT);
    let currentFrameTime = Date.now();
    let deltaTime = currentFrameTime - startFrameTime;
    let actualFPS = 1000 / deltaTime;
    pen.textStyle = "20px Arial";
    pen.fillText("FPS: " + actualFPS.toFixed(2), 10, 20);
    startFrameTime = currentFrameTime;

    drawFace(moMat)



    console.log(startFrameTime);
}
setInterval(gameLoop, 2000 / FPS);
