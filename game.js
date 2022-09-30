// Draw a circle
const drawCircle = () => {
    const cirlce = document.getElementById("canvas");
    const ctx = cirlce.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

// Draw a Rectangle
const drawRectangle = () => {
    const rectangle = document.getElementById("canvas");
    if (rectangle.getContext) {
        const context = rectangle.getContext("2d");

        context.fillRect(20, 20, 100, 100);
        context.clearRect(30, 30, 80, 80);
        ctx.strokRect(50, 50, 50, 50);
    }
}

// Draw a Triangle
const drawTriangle = () => {
    const triangle = document.getElementById("canvas");
    if (triangle.getContext) {
        const context = triangle.getContext("2d");

        context.beginPath();
        context.moveTo(75, 80);
        context.lineTo(10,75);
        context.lineTo(10,25);
        context.fill();
    }
}
