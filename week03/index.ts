interface BulletInterface {
  type: string;
  damage: number;
}

interface GunInterface {
  type: string;
  bullet: BulletInterface;
  bulletNumber: number;
  addBullet(bulletNumber: number);
  toggleBullet(newBullet: BulletInterface);
  shut(enermy: HumanInterface);
}

interface HumanInterface {
  name: string;
  blood: number;
  gun: GunInterface;
}

class Human {
  name: string;
  blood: number;
  gun: GunInterface;
  constructor(name: string, blood: number) {
    this.name = name;
    this.blood = blood;
  }
  equipGun(gun: GunInterface) {
    this.gun = gun;
    console.log(`${this.name}装备${this.gun.type}枪`);
  }
  addBullet(bulletNumber: number) {
    this.gun.addBullet(bulletNumber);
    console.log(`${this.name}为${this.gun.type}枪上了${bulletNumber}颗子弹`);
  }
  toggleBullet(newBullet: BulletInterface) {
    this.gun.toggleBullet(newBullet);
    console.log(`${this.name}为${this.gun.type}枪换用${newBullet.type}子弹`);
  }
  shut(enermy: HumanInterface) {
    this.gun.shut(enermy);
    console.log(`${this.name}射中了${enermy.name},敌人还剩${enermy.blood}血量,自己还剩${this.blood}血量`);
  }
  showCurrentState() {
    console.log(`${this.name}拥有${this.gun.type}枪，还剩${this.gun.bulletNumber}颗子弹，还有${this.blood}血量`);
  }
}

class Gun {
  type: string;
  bulletNumber: number;
  bullet: BulletInterface;
  constructor(type: string, bulletNumber: number) {
    this.type = type;
    this.bulletNumber = bulletNumber;
  }
  addBullet(bulletNumber: number) {
    this.bulletNumber += bulletNumber;
  }
  toggleBullet(newBullet: BulletInterface) {
    this.bullet = newBullet;
  }
  shut(enermy: HumanInterface) {
    enermy.blood -= this.bullet.damage;
  }
}

class Bullet {
  type: string;
  damage: number;

  constructor(type: string, damage: number) {
    this.type = type;
    this.damage = damage;
  }
}

let a = new Human('a', 100);
let b = new Human('b', 100);
let kb1 = new Gun('kb1', 100);
let c3 = new Bullet('c3', 1);

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