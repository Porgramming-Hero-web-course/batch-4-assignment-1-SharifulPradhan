"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === 'circle') {
            return Math.PI * shape.radius * shape.radius;
        }
        else if (shape.shape === 'rectangle') {
            return shape.width * shape.height;
        }
        throw new Error("Unknown shape type");
    }
    // Sample Input 1:
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // Sample Output 1: 78.54;
    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    // Sample Output 2: 24;
    console.log("circleArea==", circleArea, "rectangleArea==", rectangleArea);
}
