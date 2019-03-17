var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * 1. 创建枚举、Any、Void、Null 、Undefined、Never、Object等基本类型，并尝试对其增删改查
 */
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["middle"] = 1] = "middle";
    Size[Size["big"] = 2] = "big";
})(Size || (Size = {}));
var boxSize = Size.big;
console.log(boxSize); // 2
boxSize = Size.small;
console.log(boxSize); // 0
var anyType = 4;
anyType = "4";
console.log(anyType); // '4'
anyType = false;
console.log(anyType); // false
function speak() {
    console.log("I am speaking");
}
speak();
var unusable = undefined;
console.log(unusable);
unusable = null;
console.log(unusable);
var a = undefined;
var b = null;
function error(message) {
    throw new Error(message);
}
// create(undefined); // OK
// create(false); // OK
// create("0"); // Error
/**
 * 2. 用var、let、const声明同一个变量，并进行修改值，若报错，需阐述为何报错原因；利用代码证明提升的作用；最后用文字至少列出三者不同点
 */
c = 1;
console.log(c);
var c; // 1 var 存在变量提升，可以在声明前使用，也可以重复赋值
/**
 * let 因为暂时性死区，不可以在声明前使用
 */
// d = 2;
// console.log(d);
// let d;
var e = 3;
var d = 4;
e = 5; // let 声明的变量可以重新赋值
function createDog(dog) {
    var newDog = { name: "haha", weight: 20 };
    if (dog.name) {
        newDog = __assign({}, newDog, { name: dog.name });
    }
    if (dog.height) {
        newDog = __assign({}, newDog, { weight: dog.height * 2 });
    }
    return newDog;
}
var mySquare = createDog({ name: "xixi" });
console.log(mySquare); // { name: "xixi", weight: 20 };
var daughter = {};
daughter.height = 170;
daughter.like = "job";
daughter.eat = function () {
    console.log("eat food");
};
/**
 * 5. 声明一个类，并且用到public、private、protected、readonly，用文字总结四者之间的区别
 * public: 指定成员是可见的，成员都默认为 public
 * private: 不能在声明它的类的外部访问，来自同一处声明的 private 成员类型才是兼容的
 * protected: 类似 private，但其也能在派生类中访问
 * readonly: 将属性设置为只读的，只读属性必须在声明时或构造函数里被初始化
 */
var Animal = /** @class */ (function () {
    function Animal(theAge) {
        this.age = theAge;
    }
    return Animal;
}());
// new Animal("dog").age; // 错误: 'age' 是私有的.
