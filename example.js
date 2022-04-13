"use strict"

const props = {
    id: 'test',
    image: 'image0.jpeg',
    boundingBoxes: [[[0.1, 0.1], [0.2, 0.2]], [[0.4, 0.4], [0.7, 0.8]]]
}
const generator = new BoundingBoxAnnotate(props);
generator.createBoundingBoxAnnotate();
