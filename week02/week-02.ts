/**
 * 1. 创建枚举、Any、Void、Null 、Undefined、Never、Object等基本类型，并尝试对其增删改查
 */
enum Size {
    small,
    middle,
    big
}
let boxSize: Size = Size.big;
console.log(boxSize); // 2
boxSize = Size.small;
console.log(boxSize); // 0

let anyType: any = 4;
anyType = "4";
console.log(anyType); // '4'
anyType = false;
console.log(anyType); // false

function speak(): void {
    console.log("I am speaking");
}
speak();
let unusable: void = undefined;
console.log(unusable);
unusable = null;
console.log(unusable);

let a: undefined = undefined;
let b: null = null;

function error(message: string): never {
    throw new Error(message);
}

declare function create(o: boolean | undefined): void;
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

let e = 3;
const d = 4;
e = 5; // let 声明的变量可以重新赋值
// d = 6; // 报错，const声明的变量不能重新赋值

/**
 * 3. 改造代码
 */
interface AnimalConfig {
    name?: string;
    height?: number;
}

function createDog(dog: AnimalConfig): { name: string; weight: number } {
    let newDog = { name: "haha", weight: 20 };
    if (dog.name) {
        newDog = { ...newDog, name: dog.name };
    }
    if (dog.height) {
        newDog = { ...newDog, weight: dog.height * 2 };
    }
    return newDog;
}

let mySquare = createDog({ name: "xixi" });
console.log(mySquare); // { name: "xixi", weight: 20 };

/**
 * 4. 分别构建一段使用继承接口和混合类型知识的代码，女儿继承了父亲的身高，继承了母亲的美丽，自己本身热爱工作，并喜欢吃东西
 */
interface Parent {
    height: number;
}

interface Daughter extends Parent {
    like: string;
    eat: object;
}
let daughter = <Daughter>{};
daughter.height = 170;
daughter.like = "job";
daughter.eat = function() {
    console.log("eat food");
};

/**
 * 5. 声明一个类，并且用到public、private、protected、readonly，用文字总结四者之间的区别
 * public: 指定成员是可见的，成员都默认为 public
 * private: 不能在声明它的类的外部访问，来自同一处声明的 private 成员类型才是兼容的
 * protected: 类似 private，但其也能在派生类中访问
 * readonly: 将属性设置为只读的，只读属性必须在声明时或构造函数里被初始化
 */
class Animal {
    public species: string;
    private age: number;
    protected name: string;
    readonly weight: number;
    constructor(theAge: number) {
        this.age = theAge;
    }
}
// new Animal("dog").age; // 错误: 'age' 是私有的.
