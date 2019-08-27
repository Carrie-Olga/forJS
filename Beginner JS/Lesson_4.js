
//1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить 
//на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 
//мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, 
//необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

    // const numToObj = (num) => {
    //     if (num < 0 || num > 999) {
    //         console.log('Input correct number');
    //         return Object;
    //     }
    //     var str = num.toString();
    //     console.log(str);   
    //     var arr = new Array();
    //     arr = str.split('');
    //     //return arr;
    //     var obj = {
    //         единицы: Number(arr[2]),
    //         десятки: Number(arr[1]),
    //         сотни: Number(arr[0]) 
    //     };
    //     return obj;
    // }

    // console.log(numToObj(199));


//Game created during the lesson

    // const gameObj = {
    //     step: 'first',
    //     run() {
    //         while (true) {
    //             if (this.step == 'end') {
    //                 console.log("End fo game");
    //                 break;
    //             } else {
    //                 this[this.step].nextStep();
    //             }
    //         }
    //     },
    //     showQuestion(question, firstBranch, secondBranch) {
    //         const answer = prompt(question).toLowerCase();
    //         switch (answer) {
    //             case 'yes': 
    //                 this.step = firstBranch;
    //                 break;
    //             case 'no':
    //                 this.step = secondBranch;
    //                 break;
    //             default:
    //                 console.log("Please enter answer yes or no");
    //         }
    //     },
    //     first: {
    //         question: "Answer yes or no",
    //         nextStep() {
    //             gameObj.showQuestion(this.question, 'third', 'second');
    //             }
    //     },
    //     second: {
    //         question: 'Step #2',
    //         nextStep() {
    //             gameObj.showQuestion(this.question, 'third', 'end');
    //         }
    //     },
    //     third: {
    //         question: 'Step #3',
    //         nextStep() {
    //             gameObj.showQuestion(this.question, 'end', 'end');
    //         }
    //     },
    // };
    // gameObj.run();




//2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)



    // const gameObj = {
    //     step: 'first',
    //     run() {
    //         this.step = prompt("Enter the step you want to execute").toLowerCase();
    //         while (true) {        
    //             if (this.step == 'end') {
    //                 console.log("End of game");
    //                 break;
    //             } else {
    //                 //console.log(this.step);
    //                 this[this.step].nextStep();
    //             }
    //         }
    //     },
    //     showQuestion(question, firstBranch, secondBranch) {
    //         const answer = prompt(question).toLowerCase();
    //         switch (answer) {
    //             case 'yes': 
    //                 this.step = firstBranch;
    //                 break;
    //             case 'no':
    //                 this.step = secondBranch;
    //                 break;
    //             default:
    //                 console.log("Please enter answer yes or no");
    //         }
    //     },
    //     first: {
    //         question: "Answer yes or no",
    //         nextStep() {
    //             gameObj.showQuestion(this.question, 'third', 'second');
    //             //console.log(gameObj.step);
    //             }
    //     },
    //     second: {
    //         question: 'Step #2',
    //         nextStep() {
    //             gameObj.showQuestion(this.question, 'third', 'end');
    //             //console.log(gameObj.step);
    //         }
    //     },
    //     third: {
    //         question: 'Step #3',
    //         nextStep() {
    //             gameObj.showQuestion(this.question, 'end', 'end');
    //             //console.log(gameObj.step);
    //         }
    //     },
    // };
    // gameObj.run();



//3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

    //     const gameObj = {
    //     step: 'first',
    //     money: 0,
    //     count: 0,
    //     run() {
    //         while (true) {        
    //             if (this.step == 'end') {
    //                 console.log("End of game");
    //                 break;
    //             } else {
    //                 //console.log(this.step);
    //                 this[this.step].nextStep();
    //             }
    //         }
    //     },
    //     showQuestion(question, firstBranch, secondBranch, thirdBranch, forthBranch) {
    //         const answer = prompt(question).toLowerCase();
    //         const money = 0;
    //         if (answer == "olga") {
    //             this.step = firstBranch;
    //             this.money += 10000;
    //             this.count += 1;
    //         } else if (answer == "30") {
    //             this.step = secondBranch;
    //             this.money += 10000;
    //             this.count += 1;
    //         } else if (answer == "160") {
    //             this.step = thirdBranch;
    //             this.money += 10000;
    //             this.count += 1;
    //         } else {
    //             console.log("You answered only " + gameObj.count + " questions and earned only " + gameObj.money + " of money :(")
    //             this.step = forthBranch;
    //         }
    //     },
    //     first: {
    //         question: "Welcome! First question: What is my name? 1. Anna; 2. Olga; 3. Marina; 4. Alla.",
    //         nextStep() {
    //             gameObj.showQuestion(this.question, "second", "third", 'forth', 'end');
    //             //console.log(gameObj.step);
    //             }
    //     },
    //     second: {
    //         question: 'Second question: How old am I? 1. 20; 2. 30; 3. 40; 4. 50.',
    //         nextStep() {
    //             gameObj.showQuestion(this.question, "second", "third", 'forth', 'end');
    //             //console.log(gameObj.step);
    //         }
    //     },
    //     third: {
    //         question: 'Third question: How tall am I? 1. 150; 2. 160; 3. 170; 4. 180.',
    //         nextStep() {
    //             gameObj.showQuestion(this.question, "second", "third", 'forth', 'end');
    //             //console.log(gameObj.step);
    //         }
    //     },
    //     forth: {
    //         nextStep() {
    //             console.log("You answered all " + gameObj.count + " questions correctly and earned " + gameObj.money + "!");
    //             gameObj.step = "end";
    //         }
    //     }
    // };
    // gameObj.run();