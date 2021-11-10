"use strict";
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
var boo = true;
// boo = 1   报错
boo = false;
console.log(boo);
var bum = 123;
console.log(bum);
var str = '你好';
console.log(str);
// 定义数组的两种方式
// 1.指定数据类型
var arr1 = [123, 777, 4396];
console.log(arr1);
// 2.泛型定义
var arr2 = ['typescript', 'vue', 'react'];
console.log(arr2);
// 3.any定义
var arr3 = [32132, null, "是？", false];
console.log(arr3);
// 元组(tuple), 可以指定数组的数据类型
var tul = ["你好", 777.7, true];
console.log(tul);
// 枚举类型(enum)
var pay_status;
(function (pay_status) {
    pay_status[pay_status["\u672A\u652F\u4ED8"] = 0] = "\u672A\u652F\u4ED8";
    pay_status[pay_status["\u652F\u4ED8"] = 1] = "\u652F\u4ED8";
    pay_status[pay_status["\u4EA4\u6613\u6210\u529F"] = 2] = "\u4EA4\u6613\u6210\u529F";
})(pay_status || (pay_status = {}));
console.log(pay_status[0]);
var temp = pay_status.交易成功;
console.log(temp);
// 任意类型(any)
var a = 123;
console.log(a);
a = '你好';
console.log(a);
a = true;
console.log(a);
// null和undefined
var temp2;
console.log(temp2); // 输出undefined
// let temp3: number
// console.log(temp3)  // 输出undefined，报错
var temp4;
console.log(temp4);
// void类型，函数无返回值
// es5的定义方法
// function run() {
//   console.log('es5')
// }
// es6写法
function run() {
    console.log('es6');
}
run();
// never类型，其它类型的子类型，代表从不会出现的值
// 这意味着声明never的变量只能被never类型所赋值
