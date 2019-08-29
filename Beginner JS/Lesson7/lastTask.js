// if (!("a" in window)) { // true, thus a is defined as 1
//     var a = 1;
// }
// alert(a);

// var b = function a(x) {
//     x && a(--x);
// };
// alert(a); // a is not defined, its a function, not a variable

// function a(x) {
//     return x * 2;
// }
// var a;
// alert(a); // here its not clear why a function is alerted, not undefined var a....

// function b(x, y, a) {
//     arguments[2] = 10;
//     alert(a);
// }
// b(1, 2, 3); // выводится 10 тк мы его переопределили в функции

// function a() {  //With call(), an object can use a method belonging to another object. I guess that null object owner is window
//     alert(this);
// }
// a.call(null);