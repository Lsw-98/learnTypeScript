// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// 抽象方法只能放在抽象类里面

abstract class dongwu {
  public name: string
  constructor(name: string) {
    this.name = name
  }

  abstract eat(): any
}

class mouse extends dongwu {   // mouse类继承dongwu抽象类，必须实现dongwu抽象类定义的抽象方法，例如eat()。其他方法可以不实现

  constructor(name: string) {
    super(name)
  }

  eat() {
    return `${this.name}吃屎`
  }
}

let m = new mouse("老鼠")
console.log(m.eat());
