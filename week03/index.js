var Human = /** @class */ (function () {
    function Human(name, blood) {
        this.name = name;
        this.blood = blood;
    }
    Human.prototype.equipGun = function (gun) {
        this.gun = gun;
        console.log(this.name + "\u88C5\u5907" + this.gun.type + "\u67AA");
    };
    Human.prototype.addBullet = function (bulletNumber) {
        this.gun.addBullet(bulletNumber);
        console.log(this.name + "\u4E3A" + this.gun.type + "\u67AA\u4E0A\u4E86" + bulletNumber + "\u9897\u5B50\u5F39");
    };
    Human.prototype.toggleBullet = function (newBullet) {
        this.gun.toggleBullet(newBullet);
        console.log(this.name + "\u4E3A" + this.gun.type + "\u67AA\u6362\u7528" + newBullet.type + "\u5B50\u5F39");
    };
    Human.prototype.shut = function (enermy) {
        this.gun.shut(enermy);
        console.log(this.name + "\u5C04\u4E2D\u4E86" + enermy.name + ",\u654C\u4EBA\u8FD8\u5269" + enermy.blood + "\u8840\u91CF,\u81EA\u5DF1\u8FD8\u5269" + this.blood + "\u8840\u91CF");
    };
    Human.prototype.showCurrentState = function () {
        console.log(this.name + "\u62E5\u6709" + this.gun.type + "\u67AA\uFF0C\u8FD8\u5269" + this.gun.bulletNumber + "\u9897\u5B50\u5F39\uFF0C\u8FD8\u6709" + this.blood + "\u8840\u91CF");
    };
    return Human;
}());
var Gun = /** @class */ (function () {
    function Gun(type, bulletNumber) {
        this.type = type;
        this.bulletNumber = bulletNumber;
    }
    Gun.prototype.addBullet = function (bulletNumber) {
        this.bulletNumber += bulletNumber;
    };
    Gun.prototype.toggleBullet = function (newBullet) {
        this.bullet = newBullet;
    };
    Gun.prototype.shut = function (enermy) {
        enermy.blood -= this.bullet.damage;
    };
    return Gun;
}());
var Bullet = /** @class */ (function () {
    function Bullet(type, damage) {
        this.type = type;
        this.damage = damage;
    }
    return Bullet;
}());
var a = new Human('a', 100);
var b = new Human('b', 100);
var kb1 = new Gun('kb1', 100);
var c3 = new Bullet('c3', 1);
a.equipGun(kb1);
a.addBullet(5);
a.toggleBullet(c3);
a.showCurrentState();
b.equipGun(kb1);
b.addBullet(10);
b.toggleBullet(c3);
b.showCurrentState();
a.shut(b);
b.shut(a);
b.shut(a);
b.shut(a);
