(function (window, document) {
  // Left and right coordinate
  function BoundingBox(leftBottom, rightTop, color, label, content) {
    this.xLeft = leftBottom[0];
    this.yLeft = leftBottom[1];
    this.xRight = rightTop[0];
    this.yRight = rightTop[1];
    this.color = color || _generateRandomColor();
    this.label = label;
    this.content = content;
    console.log(this.color);
  }

  BoundingBox.prototype = {
    getWidth: function () {
      return (this.xRight - this.xLeft) * 100;
    },
    getHeight: function () {
      return (this.yRight - this.yLeft) * 100;
    },
  };

  function processBoundingBoxList(boundingBoxList) {
    return boundingBoxList.map(
      (boundingBox) =>
        new BoundingBox(
          boundingBox.coordinates[0],
          boundingBox.coordinates[1],
          boundingBox.color,
          boundingBox.label,
          boundingBox.content
        )
    );
  }

  function BoundingBoxAnnotate(props) {
    this.id = props.id;
    this.image = props.image;
    this.boundingBoxes = processBoundingBoxList(props.boundingBoxes);
    this.labels = props.labels;

    this._labels2DivID = {}; // stores a mapping of labels to their corresponding divs
  }

  // https://www.w3schools.com/howto/howto_js_draggable.asp
  function _dragElement(element) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
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
      function offsetBottom(el, i) {
        i = i || 0;
        return $(el)[i].getBoundingClientRect().bottom;
      }

      // Returns right offset value
      function offsetRight(el, i) {
        i = i || 0;
        return $(el)[i].getBoundingClientRect().right;
      }
      console.log('bottom: ', offsetBottom(element.parentElement));
      const parentElement = element.parentElement;

      element.style.top =
        Math.min(
          Math.max(0, element.offsetTop - pos2),
          offsetBottom(parentElement) -
            element.offsetHeight -
            parentElement.offsetTop
        ) + 'px';
      element.style.left =
        Math.min(
          Math.max(0, element.offsetLeft - pos1),
          offsetRight(parentElement) -
            element.offsetWidth -
            parentElement.offsetLeft
        ) + 'px';
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  // https://stackoverflow.com/questions/1484506/random-color-generator
  function _generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  BoundingBoxAnnotate.prototype = {
    createBoundingBoxAnnotate: function () {
      const div = document.getElementById(this.id);

      let image = document.createElement('img');
      image.src = this.image;
      image.setAttribute('style', 'display:block');

      const parentDiv = document.createElement('div');
      parentDiv.classList.add('BoundingBoxAnnotateParent');

      parentDiv.appendChild(image);
      this._drawBoundingBox(parentDiv);
      this._generateLegend(parentDiv);
      div.appendChild(parentDiv);
    },
    _drawBoundingBox: function (parentDiv) {
      this.boundingBoxes.forEach((boundingBox, index) => {
        // Create BoundingBox
        const boundingBoxDiv = document.createElement('div');
        boundingBoxDiv.classList.add('BoundingBoxDiv');
        boundingBoxDiv.setAttribute(
          'style',
          boundingBoxDiv.getAttribute('style') +
            `;position:absolute;bottom:${boundingBox.yLeft * 100}%;
                left:${
                  boundingBox.xLeft * 100
                }%;width:${boundingBox.getWidth()}%;height:${boundingBox.getHeight()}%;border-color:${boundingBox.color};z-index:${
              index + 1
            }`
        );

        boundingBoxDiv.addEventListener('click', function (e) {
          console.log('Clicked : ', e);
        });

        // Add Label
        const labelDiv = document.createElement('div');
        labelDiv.classList.add('LabelDiv');
        labelDiv.setAttribute(
          'style',
          labelDiv.getAttribute('style') +
            `;position:absolute;bottom:${boundingBox.yRight * 100 + 0.5}%;
                left:${boundingBox.xLeft * 100}%;background-color:${boundingBox.color};z-index:${index};`
        );

        const spanLabel = document.createElement('span');
        const labelText = boundingBox.label;
        const label = document.createTextNode(labelText);

        spanLabel.appendChild(label);
        labelDiv.appendChild(spanLabel);

        labelDiv.setAttribute('id', labelText + '-' + index);
        boundingBoxDiv.setAttribute(
          'id',
          'boundingBox-' + labelText + '-' + index
        );

        // Append divs to parent div
        parentDiv.appendChild(boundingBoxDiv);
        parentDiv.appendChild(labelDiv);

        // Add labels to labels2divid
        if (!this._labels2DivID[labelText]) {
          this._labels2DivID[labelText] = [];
        }
        this._labels2DivID[labelText].push(boundingBoxDiv.id, labelDiv.id);
      });
    },

    // _generateModal: function() {

    // }

    _generateLegend: function (parentDiv) {
      const legendDiv = document.createElement('div');
      legendDiv.classList.add('LegendDiv');

      const list = document.createElement('ul');
      list.setAttribute('style', 'list-style-type:none');

      const uniqueLabels = [... new Set(this.boundingBoxes.map(boundingBox => boundingBox.label))]
    //   const uniqueLabels = [...new Set(this.labels)];
      uniqueLabels.forEach((label) => {
        const listElement = document.createElement('li');

        // Create checkbox
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', 'checkBox-' + label);
        // Set onclick functionality;
        checkBox.onclick = () => this._handleCheckBoxOnclick(checkBox, label);
        checkBox.checked = true;

        // Create Text
        const text = document.createElement('span');
        const textNode = document.createTextNode(label);
        text.appendChild(textNode);

        listElement.appendChild(checkBox);
        listElement.appendChild(text);

        list.appendChild(listElement);
      });
      const legendHeaderDiv = document.createElement('div');
      // TODO: create css for legendHeaderDiv
      legendHeaderDiv.setAttribute('id', 'legendHeader');
      legendHeaderDiv.setAttribute('style', 'cursor:move');
      const legendHeaderText = document.createTextNode('Labels');
      legendHeaderDiv.appendChild(legendHeaderText);
      legendDiv.appendChild(legendHeaderDiv);

      legendDiv.appendChild(list);
      parentDiv.appendChild(legendDiv);
      _dragElement(legendDiv);
    },

    _handleCheckBoxOnclick: function (checkBoxElement, label) {
      const divIDsToHide = this._labels2DivID[label];
      divIDsToHide.forEach((divID) => {
        const element = document.getElementById(divID);
        if (checkBoxElement.checked) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    },
  };

  // allows function BoundingBoxAnnotate to be accessible globally on the window object(represents browser)
  window.BoundingBoxAnnotate =
    window.BoundingBoxAnnotate || BoundingBoxAnnotate;
})(window, window.document);
