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
        this.boundingBoxes = processBoundingBoxList(props.boundingBoxes)
    }

    BoundingBoxAnnotate.prototype = {
        
        createBoundingBoxAnnotate: function() {
            const div = document.getElementById(this.id);
            let image = document.createElement('img');
            image.src = this.image;
            div.appendChild(image);
            this._drawBoundingBox(div);
        },
        _drawBoundingBox: function(parentDiv) {
            parentDiv.setAttribute("style", "position:relative;display:inline-block")
            this.boundingBoxes.forEach((boundingBox, index) => {
                const boundingBoxDiv = document.createElement('div');
                boundingBoxDiv.setAttribute("style", `position:absolute;bottom:${boundingBox.yLeft * 100}%;
                left:${boundingBox.xLeft * 100}%;width:${boundingBox.getWidth()}%;height:${boundingBox.getHeight()}%;border:solid 3px black;border-radius:2%;z-index:${index + 1}`);
                parentDiv.appendChild(boundingBoxDiv);
            }); 
        },

        // _generateModal: function() {

        // }

        // _generateTable: function() {

        // }

        
    }

    // allows function BoundingBoxAnnotate to be accessible globally on the window object(represents browser)
    window.BoundingBoxAnnotate = window.BoundingBoxAnnotate || BoundingBoxAnnotate;

})(window, window.document);
