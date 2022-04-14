"use strict"

// const props = {
//     id: 'test',
//     image: 'image0.jpeg',
//     boundingBoxes: [[[0.1, 0.1], [0.2, 0.2]], [[0.4, 0.4], [0.7, 0.8]], [[0.3, 0.5], [0.6, 0.6]]],
//     labels: ['label 1', 'label 2', 'label 1'],
// }

const propsV2 = {
    id: 'test',
    image: 'image0.jpeg',
    boundingBoxes : [
        {
            coordinates: [[0.1, 0.1], [0.2, 0.2]],
            color: 'black',
            label: 'label 1',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.4, 0.4], [0.7, 0.8]],
            color: 'red',
            label: 'label 2',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.3, 0.5], [0.6, 0.6]],
            label: 'label 3',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        }
    ]

}


/**
 * boundingBox : {
 *  coordinates: [[lx, ly], [rx, ry]]
 *  color: str
 *  label: str
 *  content: HTMLElement | Text
 * }
 * 
 * 
 */

const generator = new BoundingBoxAnnotate(propsV2);
generator.createBoundingBoxAnnotate();
