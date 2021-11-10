// 属性接口
// 对json的约束
function printLabel(labelInfo: { label1: string, label2: string }): void {
  console.log(labelInfo.label1)

}

// 约束：如果这里传入对象类型就会报错，这就是一个约束
// printLabel("我是一个label")   

printLabel({ label1: "张三", label2: "男" })  // label1变量名为printLabel()函数中定义的形参 


// 对批量方法传入参数进行约束

