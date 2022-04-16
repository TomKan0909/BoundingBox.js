"use strict"

// const props = {
//     id: 'test',
//     image: 'image0.jpeg',
//     boundingBoxes: [[[0.1, 0.1], [0.2, 0.2]], [[0.4, 0.4], [0.7, 0.8]], [[0.3, 0.5], [0.6, 0.6]]],
//     labels: ['label 1', 'label 2', 'label 1'],
// }

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
}

const htmlstr= `
<div class = "CardContent">
<h2> Title </h2>
<img src = "https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" width="400px" height="400px">
</img>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   
</p>

</div>
`


const props0 = {
    id: 'example0',
    image: 'images/image0.jpeg',
    width: '1400',
    height: '860', 
    displayLegend: true,
    modalOnClick: true,
    boundingBoxes : [
        {
            coordinates: [[0, 0.2], [0.05, 0.3]],
            color: '#BDBD00',
            label: 'Pedestrian',
            id: 'box0.1',
            content: createElementFromHTML(htmlstr)   
        },
        {
            coordinates: [[0.6, 0.26], [0.705, 0.45]],
            color: 'red',
            label: 'Bus',
            id: 'box0.2',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.4, 0.21], [0.42, 0.31]],
            color: 'blue',
            label: 'Officer',
            id: 'box0.3',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.2, 0.3], [0.25, 0.35]],
            color: '#BDBD00',
            label: 'Pedestrian',
            id: 'box0.4',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.55, 0.345], [0.6, 0.425]],
            color: 'red',
            label: 'Bus',
            id: 'box0.5',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.44, 0.22], [0.52, 0.45]],
            color: '#a16800',
            label: 'Streetcar',
            id: 'box0.6',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.52, 0.56], [0.64, 0.63]],
            color: '#009483',
            label: 'Signs',
            id: 'box0.7',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.21, 0.57], [0.31, 0.61]],
            color: '#009483',
            label: 'Signs',
            id: 'box0.8',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.175, 0.365], [0.19, 0.415]],
            color: '#9e0081',
            label: 'Traffic Lights',
            id: 'box0.9',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.355, 0.31], [0.38, 0.4]],
            color: '#9e0081',
            label: 'Traffic Lights',
            id: 'box0.10',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.403, 0.34], [0.427, 0.4]],
            color: '#9e0081',
            label: 'Traffic Lights',
            id: 'box0.11',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
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

const bba0 = new BoundingBoxAnnotate(props0);
bba0.createBoundingBoxAnnotate();    


const props1 = {
    id: 'example1',
    image: 'images/image1.jpeg',
    width: '1400',
    height: '700', 
    displayLegend: false,
    modalOnClick: false,
    boundingBoxes : [
        {
            coordinates: [[0.47, 0.3], [0.515, 0.57]],
            color: '#1B8C7F',
            label: 'Officer K',
            id: 'box1.1',
            content: createElementFromHTML(htmlstr)   
        },
        {
            coordinates: [[0.52, 0.29], [0.55, 0.56]],
            color: '#A81976',
            label: 'Luv',
            id: 'box1.2',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.02, 0.25], [0.1, 0.88]],
            color: '#6B0000',
            label: 'Replicants',
            id: 'box1.3',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.17, 0.3], [0.21, 0.75]],
            color: '#6B0000',
            label: 'Replicants',
            id: 'box1.4',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.235, 0.35], [0.275, 0.7]],
            color: '#6B0000',
            label: 'Replicants',
            id: 'box1.5',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.29, 0.36], [0.32, 0.66]],
            color: '#6B0000',
            label: 'Replicants',
            id: 'box1.6',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.88, 0.25], [0.98, 0.94]],
            color: '#6B0000',
            label: 'Replicants',
            id: 'box1.7',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.78, 0.33], [0.83, 0.75]],
            color: '#6B0000',
            label: 'Replicants',
            id: 'box1.8',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.72, 0.35], [0.75, 0.69]],
            color: '#6B0000',
            label: 'Replicants',
            id: 'box1.9',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        {
            coordinates: [[0.675, 0.35], [0.715, 0.64]],
            color: '#6B0000',
            label: 'Replicants',
            id: 'box1.10',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
    ]

}

const bba1 = new BoundingBoxAnnotate(props1);
bba1.createBoundingBoxAnnotate();

const toggleLegend = document.getElementById('displayLegendSwitchLabel');
const toggleOnClick = document.getElementById('displayOnClickSwitchLabel');

toggleLegend.onclick = () => {
    const checkbox = document.getElementById('displayLegendSwitch');
    if(checkbox.checked){
        bba1.toggleLegend(true);
    } else{
        bba1.toggleLegend(false);
    }
}

toggleOnClick.onclick = () => {
    const checkbox = document.getElementById('displayOnClickSwitch');
    if(checkbox.checked){
        bba1.toggleOnClick(true);
    } else{
        bba1.toggleOnClick(false);
    }
}





