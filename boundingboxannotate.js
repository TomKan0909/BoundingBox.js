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
    this.width = props.width;
    this.height = props.height;
    this.boundingBoxes = processBoundingBoxList(props.boundingBoxes);

    this._labels2DivID = {}; // stores a mapping of labels to their corresponding divs
    this._labels2Color = {};
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

  // https://stackoverflow.com/questions/20114469/javascript-generate-random-dark-color
  function _generateRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  }

  BoundingBoxAnnotate.prototype = {
    createBoundingBoxAnnotate: function () {
      const div = document.getElementById(this.id);
      
      const parentDiv = document.createElement('div');
      parentDiv.classList.add('BoundingBoxAnnotateParent');
      
      const image = this._createImage();
      parentDiv.appendChild(image);
      this._drawBoundingBox(parentDiv);
      this._generateLegend(parentDiv);
      div.appendChild(parentDiv);
    },
    _createImage: function() {
      let image = document.createElement('img');
      image.src = this.image;
      if (this.width) {
        image.width = this.width;
      }
      if(this.height) {
        image.height = this.height;
      }
      image.setAttribute('style', 'display:block');
      return image
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
                }%;width:${boundingBox.getWidth()}%;height:${boundingBox.getHeight()}%;border-color:${
              boundingBox.color
            };z-index:${index + 1}`
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
                left:${boundingBox.xLeft * 100}%;background-color:${
              boundingBox.color
            };z-index:${index};`
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

        // Add labels to labels2divID
        if (!this._labels2DivID[labelText]) {
          this._labels2DivID[labelText] = [];
        }
        this._labels2DivID[labelText].push(boundingBoxDiv.id, labelDiv.id);

        // Add colors to labels2color
        if (!this._labels2Color[labelText]) {
          this._labels2Color[labelText] = boundingBox.color;
        }
      });
    },

    // _generateModal: function() {

    // }

    _generateLegend: function (parentDiv) {
      const legendDiv = document.createElement('div');
      legendDiv.classList.add('LegendDiv');

      const labelListDiv = document.createElement('div');
      labelListDiv.classList.add('LabelListDiv');

      const uniqueLabels = [
        ...new Set(this.boundingBoxes.map((boundingBox) => boundingBox.label)),
      ];
      uniqueLabels.forEach((label) => {
        const labelElement = document.createElement('label');
        labelElement.classList.add('CheckBoxContainer');
        // Create checkbox
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', 'checkBox-' + label);
        // Set onclick functionality;
        // checkBox.onclick = () => this._handleCheckBoxOnclick(checkBox, label);
        checkBox.addEventListener(
          'click',
          () => this._handleCheckBoxOnclick(checkBox, label),
          false
        );
        checkBox.checked = true;
        // labelElement.onclick = () => this._handleCheckBoxOnclick(checkBox, label);
        // Create Text
        const checkMark = document.createElement('span');
        checkMark.classList.add('CheckMark');
        // checkMark.style.backgroundColor = this._labels2Color[label];

        const textNode = document.createTextNode(label);
        labelElement.appendChild(textNode);
        labelElement.appendChild(checkBox);
        labelElement.appendChild(checkMark);
        labelElement.setAttribute(
          'style',
          `--color: ${this._labels2Color[label]}`
        );

        labelListDiv.appendChild(labelElement);
      });
      const legendHeaderDiv = document.createElement('div');
      legendHeaderDiv.setAttribute('id', 'legendHeader');

      legendHeaderDiv.classList.add('LegendHeaderDiv');
      const legendHeaderText = document.createTextNode('Labels');
      legendHeaderDiv.appendChild(legendHeaderText);
      legendDiv.appendChild(legendHeaderDiv);

      legendDiv.appendChild(labelListDiv);
      parentDiv.appendChild(legendDiv);
      _dragElement(legendDiv);
    },

    _handleCheckBoxOnclick: function (checkBoxElement, label) {
      const divIDsToHide = this._labels2DivID[label];
      // https://www.impressivewebs.com/animate-display-block-none/
      console.log(divIDsToHide);
      divIDsToHide.forEach((divID) => {
        const element = document.getElementById(divID);
        if (checkBoxElement.checked) {
          if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            console.log('remove hidden');
            setTimeout(function () {
              element.classList.remove('visuallyhidden');
              console.log('remove visually hidden');
            }, 20);
          } else {
              checkBoxElement.checked = false;
          }
        } else {
          element.classList.add('visuallyhidden');
          console.log('add visually hidden');
          element.addEventListener(
            'transitionend',
            function (e) {
              console.log('hidden');
              if (element.classList.contains('visuallyhidden')) {
                element.classList.add('hidden');
              }
            },
            {
              capture: false,
              once: true,
              passive: false,
            }
          );
        }
      });
    },
  };

  // allows function BoundingBoxAnnotate to be accessible globally on the window object(represents browser)
  window.BoundingBoxAnnotate =
    window.BoundingBoxAnnotate || BoundingBoxAnnotate;
})(window, window.document);
