var greeter = (function () {
    function greeter(name, age) {
        this.name = name;
        this.age = age;
    }
    greeter.prototype.greet = function () {
        console.log("hello " + this.name + " greetings and  your age is " + this.age);
    };
    return greeter;
}());
var h1 = new greeter('Raj', 22);
