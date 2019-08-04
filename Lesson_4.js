
//1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить 
//на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 
//мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, 
//необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const numToObj = (num) => {
    if (num < 0 || num > 999) {
        console.log('Input correct number');
        return Object;
    }
    var str = num.toString();
    console.log(str);   
    var arr = new Array();
    arr = str.split('');
    //return arr;
    var obj = {
        единицы: Number(arr[2]),
        десятки: Number(arr[1]),
        сотни: Number(arr[0]) 
    };
    return obj;
}

console.log(numToObj(199));