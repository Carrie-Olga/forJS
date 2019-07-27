//1

var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2, сразу инкрементирование
d = b++; console.log(d);           // 1, сначала происходит возвращение значения, а потом выполняется инкрементирование
c = (2+ ++a); console.log(c);      // 5, а уже увеличена до 3х в шаге 1б поэтому 2+3
d = (2+ b++); console.log(d);      // 4, б в этом шаге увеличивается на 1 с шага 2, отсуда 2+2
console.log(a);                    // 3, в шаге 3 а увеличена до 3х
console.log(b);                    // 3, в шаге 4 увеличили при след выполнении на 1, отсюда 3

//2

var f = 2;
var x = 1 + (f *= 2);               // 5

//3

var g = 0;
var h = 5;

if (g >= 0 && h >= 0)
    console.log(g - h);
else if (g < 0 && h < 0)
    console.log(g * h);
else if (g >= 0 && h < 0 || g < 0 && h >= 0)
    console.log(g + h);

//4 Присвоить переменной а значение в промежутке [0..15]. 
    //С помощью оператора switch организовать вывод чисел от a до 15.

/*working code:

    var j = Math.floor(Math.random() * 15) + 1; 

    for(var i = j; i < 16; i++) {
        console.log(i);
    }
*/
var j = Math.floor(Math.random() * 5) + 1;
switch (j) {
    case 1:
        for(var i = 1; i < 6; i++) {
            console.log(i);
        }
        break;
    case 2:
            for(var i = 2; i < 6; i++) {
                console.log(i);
            }
        break;
    case 3:
            for(var i = 3; i < 6; i++) {
                console.log(i);
            }
        break;
    case 4:
            for(var i = 4; i < 6; i++) {
                console.log(i);
            }
        break;
    case 5:
            for(var i = 5; i < 6; i++) {
                console.log(i);
            }
        break;
    default:
        console.log(0);
}

//5 Реализовать четыре основные арифметические операции 
    //в виде функций с двумя параметрами. Обязательно использовать оператор return.

function add(x, y) {
    return x + y;
}

function deduct(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function devide(x, y) {
    return x / y;
}

//6 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
    //где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
    //В зависимости от переданного значения выполнить одну из арифметических операций (использовать 
    //функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
            console.log(add(arg1, arg2));
            break;
        case 'deduct':
            console.log(deduct(arg1, arg2));
            break;
        case 'multiply':
            console.log(multiply(arg1, arg2));
            break;
        case 'devide':
            console.log(devide(arg1, arg2));
            break;
        default:
            console.log("No such operation.");
    }
}
mathOperation(3, 4, 'deduct');

//7 * Сравнить null и 0. Объяснить результат.

var l = null;
var m = 0;

console.log(typeof l); //object
console.log(typeof m); //number
console.log(l == m); //false
console.log(l === m); //false

//8 * С помощью рекурсии организовать функцию 
    //возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.
/*
    function fibonacci(n, prev1, prev2){
        var current = prev1 + prev2;
        var fibonacci_string = current + " ";
        if(n > 1)
            fibonacci_string += fibonacci(n - 1, current, prev1);
        return fibonacci_string;
    }
    console.log(fibonacci(4, 1, 0));
*/

//У меня получилось, но я до конца не понимаю, как...

function power(val, pow) {
    if (pow > 0) {
        var current = val;
        if (pow > 1)
            current *= power(val, pow - 1); 
            return current;
    } else 
        return "Operation not possible";
}
console.log(power(-3, 5));
