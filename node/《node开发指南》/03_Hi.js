function sayHi() {    let name = null;    this.setName = function (theName) {        name = theName;    };    this.getName = function () {        console.log('Hello ' + name);    }}//这样做在引入模块的时候还需要进行二次获取sayHello// exports.sayHello = sayHi;//exports本身为一个{}空对象，这样做直接覆盖了原本的{}对象//在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exportsmodule.exports = sayHi;