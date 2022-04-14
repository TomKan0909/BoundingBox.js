"use strict"

const props = {
    id: 'test',
    image: 'image0.jpeg',
    boundingBoxes: [[[0.1, 0.1], [0.2, 0.2]], [[0.4, 0.4], [0.7, 0.8]], [[0.3, 0.5], [0.6, 0.6]]],
    labels: ['label 1', 'label 2', 'label 1'],
}
const generator = new BoundingBoxAnnotate(props);
generator.createBoundingBoxAnnotate();
