// ts中的数据类型
// boolean
// number
// string
// array
// tuple
// enum
// null、undefined
// void
// never


// 定义变量要指定类型
let boo: boolean = true

// boo = 1   报错
boo = false

let bum: number = 123
console.log(bum)

let str: string = '你好'
console.log(str)

// 定义数组的两种方式
// 1.指定数据类型
let arr1: number[] = [123, 777, 4396]
console.log(arr1)

// 2.泛型定义
let arr2: Array<string> = ['typescript', 'vue', 'react']
console.log(arr2)

// 3.any定义
let arr3: any = [32132, null, "是？", false]
console.log(arr3)

// 元组(tuple), 可以指定数组的数据类型
let tul: [string, number, boolean] = ["你好", 777.7, true]
console.log(tul)

// 枚举类型(enum)
enum pay_status {
  "未支付" = 0,
  "支付" = 1,
  "交易成功" = 2
}
console.log(pay_status[0])
let temp: pay_status = pay_status.交易成功
console.log(temp)

// 任意类型(any)
let a: any = 123
console.log(a)
a = '你好'
console.log(a)

// null和undefined
let temp2: undefined
console.log(temp2)  // 输出undefined

// let temp3: number
// console.log(temp3)  // 输出undefined，报错

let temp4: number | undefined
console.log(temp4)

// void类型，函数无返回值
// es5的定义方法
// function run() {
//   console.log('es5')
// }

// es6写法
function run(): void {
  console.log('es6')
}

run()

// never类型，其它类型的子类型，代表从不会出现的值
// 这意味着声明never的变量只能被never类型所赋值
