// 函数的定义
// 函数声明法
function fun1(): string {  // 定义返回类型
  console.log("fun1")
  return "fun1-你好"
}

// 匿名函数法
let fun2 = function (): string {
  return "fun2-TypeScript"
}

// 定义方法传参
function fun3(name: string, age: number): string {
  return `fun3-${name}---${age}`
}

console.log(fun3("刘帅武", 23))

// 无返回值
function fun4(): void {
  console.log("fun4-没有返回值")
}


// 可选参数
function fun5(name: string, age: number, marry?: string): string {
  if (marry) {
    return `${name}---${age}---${marry}`
  } else {
    return `${name}---${age}`
  }
}

console.log(fun5("fun51-刘帅武", 23))
console.log(fun5("fun52-刘帅武", 23, "否"))

// 默认参数
// 带有默认值的参数放在后面申明
function fun6(age: number, name: string = "刘帅武"): string {
  return `fun6-${age}`
}

console.log(fun6(23))


// 剩余参数
// 三点运算符，接收实参
function fun7(...result: number[]): number {
  let sum = 0
  for (let i = 0; i < result.length; i++) {
    sum += result[i]
  }
  return sum
}

console.log(fun7(1, 1, 1, 1))
console.log(fun7(1, 1, 1, 1, 1, 1))


// 函数重载
// 同一个函数提供多个函数类型定义来实现函数的重载

// 形参不同
function fun8(name: string): string

function fun8(age: number): number

function fun8(str: any): any {
  if (typeof str === "string") {
    return '我叫' + str
  }
  else {
    return '我的年龄是' + str
  }
}

console.log(fun8("张三"))
console.log(fun8(20))

// 形参相同
function fun9(name: string): string
function fun9(name: string, age: number): string
function fun9(name: any, age?: any): any {
  if (age) {
    return '我叫' + name + '我的年龄是' + age
  } else {
    return '我叫' + name
  }
}

console.log(fun9("张三", 20))
console.log(fun9("张三"))


// 箭头函数
