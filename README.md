# Bounding Box

## About
A interactive js library to draw bounding boxes with labels and descriptions for images. [Demonstration](https://www.google.com/) can be found here.

---

## Getting Started 
Fetch BoundingBox.js library by placing these in your html document underneath the `<head>` tag

```html
<script defer type="text/javascript" src="tbd"></script>
<link rel="stylesheet" href="tbd"/>
```

Create a div to add the image in your html document underneath the `<body>` tag
```html
<div id="myUniqueDivID"></div>
```

Add an example code block that follows this in your .js file to use the library
```javascript
const props = {
  id: 'myUniqueDivID', // The div id to insert image 
  image: 'images/image.jpeg', // path of image to insert into div
  width: '800', // width of image in pixels
  height: '600', // height of image in pixels
  displayLegend: true, // boolean flag to display or not display the legend
  boundingBoxOnClick: true, // boolean flag to turn on or off the behavior when clicking on 
  boundingBoxes: [
        {
        coordinates: [
            [0.2, 0.3],
            [0.3, 0.4],
        ],
        color: '#1B8C7F',
        label: 'myLabel',
        id: 'Unique ID :)',
        content: 'Your first bounding box',
        }
    ]
};
const boundingBoxAnnotate = new BoundingBoxAnnotate(props);
boundingBoxAnnotate.createBoundingBoxAnnotate();
```


---
## API

### `Constructor: new BoundingBoxAnnotate(props)`

Initializes BoundingBoxAnnotate object

Fields in props

- `id: str` 

    The div id in HTML document to insert image  
- `image: str`

    Path to image 
- `width: int`

    The width of image in pixels
- `height: int`

    The height of image in pixels
- `displayLegend: boolean`

    Displays legend if `true`, does not display legend if `false`

- `boundingBoxOnClick: boolean`

    Enables boundingBoxOnClick behavior if `true`, disables boundingBoxOnClick behavior if `false`
- `boundingBoxes: [BoundingBox]`

    A list of `BoundingBox` objects. Props for `BoundingBox` type explained below
    - `coordinates: [[lowerLeftX: float, lowerLeftY: float], [upperRightX: float, upperRightY: float]]`
        
        Represents the coordinates of a bounding box. Make sure `lowerLeftX < upperRightX && lowerLeftY < upperRightY` and values for each coordinate are values between `[0, 1)`
    - `color: str`
        
        Html accepted color code. Make sure `color:label` have a 1:1 relationship. That is if there exists a boundingBox with label `'label'` and color `'blue'`, subsequent bounding boxes with label `'label'` must have color `'blue'` and vice versa
    - `label: str`

        Label of Bounding Box. Make sure `label:color` have a 1:1 relationship
    - `id: str`

        The unique if to identify the bounding box by
    - `content: str | HTMLElement`

        The annotated content for the bounding box, can be plain text or user's custom component

### `toggleLegend(isDisplay: boolean): void`
A function to display and and hide legend

### `toggleOnClick(isOnClick: boolean): void`
A function to turn on/off functionality for onclick on bounding boxes

### `addBoundingBox(boundingBox: BoundingBox): void`
A function to add a new bounding box to image

### `deleteBoundingBox(boundingBoxID): void`
A function to delete a bounding box specified by it's id