(function(global,factory){
    var draggle = factory(global);
})(window, function(window){
    var draggle = function () {
        this.age = "233";
    }
    var next = function () { 
        this.set = "setAge";
    }

    draggle = function () { 
        return  new next();
    };
    window.draggle = draggle;
    return draggle;
});
var next = draggle();
next.asj = 222;