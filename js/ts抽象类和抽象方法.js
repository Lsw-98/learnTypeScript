"use strict";
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// 抽象方法只能放在抽象类里面
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
var dongwu = /** @class */ (function () {
    function dongwu(name) {
        this.name = name;
    }
    return dongwu;
}());
var mouse = /** @class */ (function (_super) {
    __extends(mouse, _super);
    function mouse(name) {
        return _super.call(this, name) || this;
    }
    mouse.prototype.eat = function () {
        return this.name + "\u5403\u5C4E";
    };
    return mouse;
}(dongwu));
var m = new mouse("老鼠");
console.log(m.eat());
