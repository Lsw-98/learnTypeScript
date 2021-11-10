"use strict";
// 函数的定义
// 函数声明法
function fun1() {
    console.log("fun1");
    return "fun1-你好";
}
// 匿名函数法
var fun2 = function () {
    return "fun2-TypeScript";
};
// 定义方法传参
function fun3(name, age) {
    return "fun3-" + name + "---" + age;
}
console.log(fun3("刘帅武", 23));
// 无返回值
function fun4() {
    console.log("fun4-没有返回值");
}
// 可选参数
function fun5(name, age, marry) {
    if (marry) {
        return name + "---" + age + "---" + marry;
    }
    else {
        return name + "---" + age;
    }
}
console.log(fun5("fun51-刘帅武", 23));
console.log(fun5("fun52-刘帅武", 23, "否"));
// 默认参数
// 带有默认值的参数放在后面申明
function fun6(age, name) {
    if (name === void 0) { name = "刘帅武"; }
    return "fun6-" + age;
}
console.log(fun6(23));
// 剩余参数
// 三点运算符，接收实参
function fun7() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i_1 = 0; i_1 < result.length; i_1++) {
        sum += result[i_1];
    }
    return sum;
}
console.log(fun7(1, 1, 1, 1));
console.log(fun7(1, 1, 1, 1, 1, 1));
function fun8(str) {
    if (typeof str === "string") {
        return '我叫' + str;
    }
    else {
        return '我的年龄是' + str;
    }
}
console.log(fun8("张三"));
console.log(fun8(20));
function fun9(name, age) {
    if (age) {
        return '我叫' + name + '我的年龄是' + age;
    }
    else {
        return '我叫' + name;
    }
}
console.log(fun9("张三", 20));
console.log(fun9("张三"));
// 箭头函数
