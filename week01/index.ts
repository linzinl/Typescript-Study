/**
 * 1. 创建一个长度为5的数组，并对其进行增删改，最后获取数组中的第三个元素
 */
let list: number[] = [1, 2, 3, 4, 5];
list.push(6);
list.shift();
list.splice(1, 1);
let element: number = list[2];
console.log(list, element);

/**
 * 2. 创建一个元组，并尝试对其增删改查
 */
let x: [number, string, any];
x = [1, "2", true];
x.push(2); // push 无法生效，未增成功，但不会报错
x[1] = "33333";
x.pop();
console.log(x, "x");

/**
 * 3. 创建一个名为Animal的基础类
 */
class Animal {
    species: string;
    constructor(species: string) {
        this.species = species;
    }
    jump(distanceInMeters: number = 0) {
        console.log(`${this.species} can jump ${distanceInMeters}m`);
    }
}

/**
 * 4. 创建两种动物的类（例如猫和狗），并且继承上一个类，创建的类要求具有动物种类名称的静态属性，并且实例化时，能够为其进行命名，通过调用方法能做出走，叫等动作
 */
class Cat extends Animal {
    name: string = "Mary";
    constructor(species: string) {
        super(species);
    }
    jump(distanceInMeters = 10) {
        super.jump(distanceInMeters);
    }
    talk() {
        console.log(`I am a ${this.species}, my name is ${this.name}`);
    }
}

class Dog extends Animal {
    name: string;
    constructor(species: string, name: string) {
        super(species);
        this.name = name;
    }
    jump(distanceInMeters = 5) {
        super.jump(distanceInMeters);
    }
    talk() {
        console.log(`I am a ${this.species}, my name is ${this.name}`);
    }
}

let cat = new Cat("cat");
cat.jump();
cat.talk();

let dog = new Dog("dog", "Jenny");
dog.jump(3);
dog.talk();
