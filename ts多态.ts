// 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态属于继承，也是继承的一种表现

class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }

  eat() {
    console.log("这是多态")
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  eat() {
    return this.name + "吃肉"
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }

  eat() {
    return this.name + "吃老鼠"
  }
}

let d = new Dog("小狗")
console.log(d.eat())
let c = new Cat("小猫")
console.log(c.eat())
