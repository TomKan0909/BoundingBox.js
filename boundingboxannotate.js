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

    // https://www.w3schools.com/howto/howto_js_draggable.asp
    function _dragElement(element) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (element.firstChild) {
          // if present, the header is where you move the DIV from:
          element.firstChild.onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          element.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          console.log('top: ', element.parentElement.offsetTop);
          
          //https://stackoverflow.com/questions/9872128/get-bottom-and-right-position-of-an-element
          // Returns bottom offset value + or - from viewport top
          function offsetBottom(el, i) { i = i || 0; return $(el)[i].getBoundingClientRect().bottom }

          // Returns right offset value
          function offsetRight(el, i) { i = i || 0; return $(el)[i].getBoundingClientRect().right }
          console.log('bottom: ', offsetBottom(element.parentElement));
          const parentElement = element.parentElement;
          
          element.style.top = Math.min((Math.max(0, (element.offsetTop - pos2))), offsetBottom(parentElement) - element.offsetHeight - parentElement.offsetTop)  + "px";
          element.style.left = Math.min((Math.max(0, element.offsetLeft - pos1)), offsetRight(parentElement) - element.offsetWidth - parentElement.offsetLeft) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
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
                left:${boundingBox.xLeft * 100}%;width:${boundingBox.getWidth()}%;height:${boundingBox.getHeight()}%;border:solid 3px black;border-radius:2%;border-top-left-radius:0;cursor:pointer;z-index:${index + 1}`);
                boundingBoxDiv.addEventListener('click', function(e) {
                    console.log('Clicked : ', e);
                });

                // Add Label
                const labelDiv = document.createElement('div');
                labelDiv.setAttribute("style", `position:absolute;bottom:${boundingBox.yRight * 100 + 0.5}%;
                left:${boundingBox.xLeft * 100}%;background-color:black;color:white;border-radius:2%;padding:1px 5px;z-index:${index}`);
                const spanLabel = document.createElement('span');
                const label = document.createTextNode(this.labels[index]);
                
                spanLabel.appendChild(label);
                labelDiv.appendChild(spanLabel);

                // Append divs to parent div
                parentDiv.appendChild(boundingBoxDiv);
                parentDiv.appendChild(labelDiv)
            }); 
        },

        // _generateModal: function() {

        // }

        _generateLegend: function(parentDiv) {
            const legendDiv = document.createElement('div');
            legendDiv.setAttribute("style", `position:absolute;bottom:0%;right:0%;height:30%;width:20%;border: solid 3px grey;border-radius:2%;background-color:white;z-index:999999`);
            
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
            const legendHeaderDiv = document.createElement('div');
            legendHeaderDiv.setAttribute('id', 'legendHeader');
            legendHeaderDiv.setAttribute('style', 'cursor:move');
            const legendHeaderText = document.createTextNode('Labels');
            legendHeaderDiv.appendChild(legendHeaderText);
            legendDiv.appendChild(legendHeaderDiv);

            legendDiv.appendChild(list);
            parentDiv.appendChild(legendDiv);
            _dragElement(legendDiv);
        }

    }

    // allows function BoundingBoxAnnotate to be accessible globally on the window object(represents browser)
    window.BoundingBoxAnnotate = window.BoundingBoxAnnotate || BoundingBoxAnnotate;

})(window, window.document);
