class Playground {
    constructor() {
        // first we need to create a stage
        this.stage = new Konva.Stage({
            container: 'container',   // id of container <div>
            width: 500,
            height: 500
        });
        this.mainLayer = new Konva.Layer();
        this.stage.add(this.mainLayer);
        this.circles = [];
    }

    generateCircles(amountOfCircles) {
        for (let i = 0; i < amountOfCircles; i++) {
            const circle = new Konva.Circle({
                x: Math.random() * 300 + 100,
                y: Math.random() * 300 + 100,
                radius: 0,
                fill: 'black',
                strokeWidth: 4
            });
            this.circles.push(circle);
            this.mainLayer.add(circle);
        }
    }

    draw() {
        this.mainLayer.draw();
    }

    drawLine(x1, y1, x2, y2) {
        const line = new Konva.Line({
            points: [x1, y1, x1, y1],
            stroke: 'black',
            strokeWidth: 2,
        });
        this.mainLayer.add(line);
        line.to({
            points: [x1, y1, x2, y2],
            duration: 0.2,
        })
    }

    async animateCircles() {
        for (const circle of this.circles) {
            const easeInDuration = 1;

            await new Promise(resolve => {
                circle.to({
                    radius: 7,
                    duration: easeInDuration,
                    easing: Konva.Easings['ElasticEaseOut'],
                });
                setTimeout(resolve, easeInDuration * 250);
            });
        }
    }
}