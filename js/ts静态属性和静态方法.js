"use strict";
var test1 = /** @class */ (function () {
    function test1(name) {
        this.name = name;
    }
    test1.prototype.run = function () {
        return this.name + "\u5728\u8DD1\u6B65";
    };
    test1.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C";
    };
    // 静态方法
    // 静态方法中不能直接调用类中的属性
    // 如果想调用要在属性前面加上static
    test1.write = function () {
        return test1.age + "\u5C81";
    };
    test1.age = 20;
    return test1;
}());
var p1 = new test1("张三"); // 调用实例方法
console.log(p1.run());
console.log(test1.write()); // 调用静态方法
