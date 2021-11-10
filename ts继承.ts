// ts中实现继承
class People {
  name: string

  constructor(name: string) {
    this.name = name
  }

  run(): string {
    return `${this.name}在运动`
  }
}

let peo = new People("李四")
console.log(peo)


// extends继承
class LiSi extends People {
  constructor(name: string) {
    super(name)   // 初始化父类中的构造函数
  }

  work(): string {
    return `${this.name}在工作`
  }

  run(): string {
    return `子类的${this.name}在跑步`
  }
}

// 继承后即可调用父类中的方法
let ls = new LiSi("李四")
console.log(ls.run())
console.log(ls.work())
