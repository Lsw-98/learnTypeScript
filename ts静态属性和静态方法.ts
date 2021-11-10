class test1 {
  public name: string
  public static age: number = 20
  constructor(name: string) {
    this.name = name
  }

  run(): string {   // 实例方法
    return `${this.name}在跑步`
  }

  work(): string {
    return `${this.name}在工作`
  }

  // 静态方法
  // 静态方法中不能直接调用类中的属性
  // 如果想调用要在属性前面加上static
  static write(): string {
    return test1.age + `岁`
  }
}

let p1 = new test1("张三")   // 调用实例方法
console.log(p1.run())

console.log(test1.write())   // 调用静态方法
