var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 1. 创建一个长度为5的数组，并对其进行增删改，最后获取数组中的第三个元素
 */
var list = [1, 2, 3, 4, 5];
list.push(6);
list.shift();
list.splice(1, 1);
var element = list[2];
console.log(list, element);
/**
 * 2. 创建一个元组，并尝试对其增删改查
 */
var x;
x = [1, "2", true];
x.push(2);
x[1] = "33333";
x.pop();
console.log(x, "x");
/**
 * 3. 创建一个名为Animal的基础类
 */
var Animal = /** @class */ (function () {
    function Animal(species) {
        this.species = species;
    }
    Animal.prototype.jump = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.species + " can jump " + distanceInMeters + "m");
    };
    return Animal;
}());
/**
 * 4. 创建两种动物的类（例如猫和狗），并且继承上一个类，创建的类要求具有动物种类名称的静态属性，并且实例化时，能够为其进行命名，通过调用方法能做出走，叫等动作
 */
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(species) {
        var _this = _super.call(this, species) || this;
        _this.name = "Mary";
        return _this;
    }
    Cat.prototype.jump = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 10; }
        _super.prototype.jump.call(this, distanceInMeters);
    };
    Cat.prototype.talk = function () {
        console.log("I am a " + this.species + ", my name is " + this.name);
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(species, name) {
        var _this = _super.call(this, species) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.jump = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        _super.prototype.jump.call(this, distanceInMeters);
    };
    Dog.prototype.talk = function () {
        console.log("I am a " + this.species + ", my name is " + this.name);
    };
    return Dog;
}(Animal));
var cat = new Cat("cat");
cat.jump();
cat.talk();
var dog = new Dog("dog", "Jenny");
dog.jump(3);
dog.talk();
