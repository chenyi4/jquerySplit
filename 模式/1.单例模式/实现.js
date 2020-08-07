let singleCase = function(name){
    this.name = name;
}

singleCase.prototype.getName = function(){
    return this.name
}

let getInstance = (function(){
    var instance = null;
    return function(name){
        if(!instance){
            instance = new singleCase(name);
        }
        return instance;
    }
})();

//测试单体模式的实例， 所以 one === two
let one = getInstance("one");
let two = getInstance("two");