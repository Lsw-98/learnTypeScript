"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ts中实现继承
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    People.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return People;
}());
var peo = new People("李四");
console.log(peo);
// extends继承
var LiSi = /** @class */ (function (_super) {
    __extends(LiSi, _super);
    function LiSi(name) {
        return _super.call(this, name) || this; // 初始化父类中的构造函数
    }
    LiSi.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C";
    };
    LiSi.prototype.run = function () {
        return "\u5B50\u7C7B\u7684" + this.name + "\u5728\u8DD1\u6B65";
    };
    return LiSi;
}(People));
// 继承后即可调用父类中的方法
var ls = new LiSi("李四");
console.log(ls.run());
console.log(ls.work());
