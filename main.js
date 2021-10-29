async function run() {
    const playground = new Playground();
    playground.generateCircles(10);
    playground.draw();
    await playground.animateCircles();
    drawLines(playground);
}

function drawLines(playground) {
    for (let i = 0; i < playground.circles.length; i++) {
        const currentCircle = playground.circles[i];
        let nextCircle;
        if (i < playground.circles.length - 1) {
            nextCircle = playground.circles[i + 1];
        }
        else {
            nextCircle = playground.circles[0];
            console.log(nextCircle);
        }
        playground.drawLine(
            currentCircle.attrs.x,
            currentCircle.attrs.y,
            nextCircle.attrs.x,
            nextCircle.attrs.y,
        );
    }
    playground.draw();
}


run();
