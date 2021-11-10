"use strict";
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
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log("正在跑步");
    };
    return Person;
}());
// 实例化类
var p = new Person("张三");
// 调用run方法
p.run();
var info = /** @class */ (function () {
    function info(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    info.prototype.getInfo = function () {
        return this.name + "今年" + this.age + "岁，他是" + this.sex + "的";
    };
    // 此方法会覆盖构造函数
    info.prototype.setName = function (name) {
        this.name = name;
    };
    return info;
}());
var i = new info("刘帅武", 23, "男");
i.setName("张三");
console.log(i.getInfo());
