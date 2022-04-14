(function (window, document) {
    
    // Left and right coordinate 
    function BoundingBox (leftBottom, rightTop) {
        this.xLeft = leftBottom[0];
        this.yLeft = leftBottom[1];
        this.xRight = rightTop[0];
        this.yRight = rightTop[1];
    }
    
    BoundingBox.prototype = {
        getWidth: function() {
            return (this.xRight - this.xLeft) * 100;
        },
        getHeight: function() {
            return (this.yRight - this.yLeft) * 100;
        }
    }

    function processBoundingBoxList(boundingBoxList){
        return boundingBoxList.map(boundingBox => new BoundingBox(boundingBox[0], boundingBox[1]))
    }

    function BoundingBoxAnnotate (props) {
        this.id = props.id;
        this.image = props.image;
        this.boundingBoxes = processBoundingBoxList(props.boundingBoxes);
        this.labels = props.labels;
    }

    BoundingBoxAnnotate.prototype = {
        
        createBoundingBoxAnnotate: function() {
            const div = document.getElementById(this.id);
            let image = document.createElement('img');
            image.src = this.image;
            image.setAttribute("style", "display:block")
            const parentDiv = document.createElement('div');
            parentDiv.setAttribute("style", "position:relative;display:inline-block;margin:0 auto")
            parentDiv.appendChild(image);
            this._drawBoundingBox(parentDiv);
            this._generateLegend(parentDiv);
            div.appendChild(parentDiv);
        },
        _drawBoundingBox: function(parentDiv) {
            this.boundingBoxes.forEach((boundingBox, index) => {
                // Create BoundingBox
                const boundingBoxDiv = document.createElement('div');
                boundingBoxDiv.setAttribute("style", `position:absolute;bottom:${boundingBox.yLeft * 100}%;
                left:${boundingBox.xLeft * 100}%;width:${boundingBox.getWidth()}%;height:${boundingBox.getHeight()}%;border:solid 3px black;border-radius:2%;z-index:${index + 1}`);
                
                // Add Label
                const paragraphLabel = document.createElement('p');
                const label = document.createTextNode(this.labels[index]);
                paragraphLabel.appendChild(label);
                boundingBoxDiv.appendChild(paragraphLabel);

                parentDiv.appendChild(boundingBoxDiv);
            }); 
        },

        // _generateModal: function() {

        // }

        _generateLegend: function(parentDiv) {
            const legendDiv = document.createElement('div');
            legendDiv.setAttribute("style", `position:absolute;bottom:0%;right:0%;height:30%;width:20%;border: solid 3px grey;border-radius:2%;background-color:white`);
            
            const list = document.createElement('ul');
            list.setAttribute("style", "list-style-type:none")
            this.labels.forEach(label => {
                const listElement = document.createElement('li');
                
                // Create checkbox
                const checkbox = document.createElement('input');
                checkbox.setAttribute("type", "checkbox");

                // Create Text
                const text = document.createElement('span');
                const textNode = document.createTextNode(label);
                text.appendChild(textNode);

                listElement.appendChild(checkbox);
                listElement.appendChild(text);

                list.appendChild(listElement);
            })
            legendDiv.appendChild(list);
            parentDiv.appendChild(legendDiv);
        }

        
    }

    // allows function BoundingBoxAnnotate to be accessible globally on the window object(represents browser)
    window.BoundingBoxAnnotate = window.BoundingBoxAnnotate || BoundingBoxAnnotate;

})(window, window.document);
