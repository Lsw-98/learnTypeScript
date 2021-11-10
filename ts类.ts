// es5中定义类
/*
  function person(name, age) {
    this.name = name
    this.age = age
    this.run() = function () {
      console.log('在跑步')
    }
  }

  let p = new person('张三')
  p.run()
*/

// ts中定义类
class Person {
  name: string   // 定义属性，省略了public关键词

  constructor(n: string) {
    this.name = n;
  }

  run(): void {
    console.log("正在跑步")
  }
}

// 实例化类
let p = new Person("张三");
// 调用run方法
p.run();


class info {
  private name: string
  private age: number
  private sex: string

  constructor(name: string, age: number, sex: string) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  getInfo(): string {
    return this.name + "今年" + this.age + "岁，他是" + this.sex + "的"
  }

  // 此方法会覆盖构造函数
  setName(name: string): void {
    this.name = name
  }
}

let i = new info("刘帅武", 23, "男")
i.setName("张三")
console.log(i.getInfo())
