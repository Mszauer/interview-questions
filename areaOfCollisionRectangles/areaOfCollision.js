var r1 = {
    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,
    // width and height
    width: 10,
    height: 4
};
var r2 = {
    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,
    // width and height
    width: 10,
    height: 4
};
function findRangeOverlap(point1, length1, point2, length2) {

    // find the highest start point and lowest end point.
    // the highest ("rightmost" or "upmost") start point is
    // the start point of the overlap.
    // the lowest end point is the end point of the overlap.
    const highestStartPoint = Math.max(point1, point2);
    const lowestEndPoint = Math.min(point1 + length1, point2 + length2);

    // return null overlap if there is no overlap
    if (highestStartPoint >= lowestEndPoint) {
        return {startPoint: null, overlapLength: null};
    }

    // compute the overlap length
    const overlapLength = lowestEndPoint - highestStartPoint;

    return {startPoint: highestStartPoint, overlapLength: overlapLength};
}

function findRectangularOverlap(rect1, rect2) {

    // get the x and y overlap points and lengths
    const xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    const yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

    // return null rectangle if there is no overlap
    if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
        return {
            leftX: null,
            bottomY: null,
            width: null,
            height: null
        };
    }

    return {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.overlapLength,
        height: yOverlap.overlapLength
    };
}

console.log(findRectangularOverlap(r1,r2));
