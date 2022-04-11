(function (window, document) {
    
    function BoundingBoxAnnotate (props){
        this.id = props.id;
        this.image = props.image;
    }

    BoundingBoxAnnotate.prototype = {
        createBoundingBoxAnnotate: function() {
            const div = document.getElementById(this.id);
            let image = document.createElement('img');
            image.src = this.image;
            div.appendChild(image);
        }
    }

})(window, window.document);

function BoundingBoxAnnotate (props){
    this.id = props.id;
    this.image = props.image;
}

BoundingBoxAnnotate.prototype = {
    createBoundingBoxAnnotate: function() {
        const div = document.getElementById(this.id);
        let image = document.createElement('img');
        image.src = this.image;
        div.appendChild(image);
    }
}