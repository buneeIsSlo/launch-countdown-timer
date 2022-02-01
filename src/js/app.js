const canvas = document.getElementById("canvas");
const drawingContext = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;

const testDraw = () => {
    //drawingContext.clearRect(0, 0, canvas.width, canvas.height);
    drawingContext.beginPath();
    drawingContext.arc(x, y, 25, 0, 2 * Math.PI, false);
    drawingContext.fill();

    //x += 1;
    //y += 1;

    //window.requestAnimationFrame(testDraw);
}

testDraw();
console.log("iss a tes!");