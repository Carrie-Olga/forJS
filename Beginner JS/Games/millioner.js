    const gameObj = {
        step: 'first',
        money: 0,
        count: 0,
        run() {
            while (true) {        
                if (this.step == 'end') {
                    console.log("End of game");
                    break;
                } else {
                    //console.log(this.step);
                    this[this.step].nextStep();
                }
            }
        },
        showQuestion(question, firstBranch, secondBranch, thirdBranch, forthBranch) {
            
            var formQuestion = document.querySelector('p');
            formQuestion.innerText = question;
            
            //как сказать ему ждать ввода?? 
         

            const money = 0;
            if (answer == "olga") {
                this.step = firstBranch;
                this.money += 10000;
                this.count += 1;
            } else if (answer == "30") {
                this.step = secondBranch;
                this.money += 10000;
                this.count += 1;
            } else if (answer == "160") {
                this.step = thirdBranch;
                this.money += 10000;
                this.count += 1;
            } else {
                console.log("You answered only " + gameObj.count + " questions and earned only " + gameObj.money + " of money :(")
                this.step = forthBranch;
            }
        },
        first: {
            question: "Welcome! First question: What is my name? 1. Anna; 2. Olga; 3. Marina; 4. Alla.",
            nextStep() {
                gameObj.showQuestion(this.question, "second", "third", 'forth', 'end');
                //console.log(gameObj.step);
                }
        },
        second: {
            question: 'Second question: How old am I? 1. 20; 2. 30; 3. 40; 4. 50.',
            nextStep() {
                gameObj.showQuestion(this.question, "second", "third", 'forth', 'end');
                //console.log(gameObj.step);
            }
        },
        third: {
            question: 'Third question: How tall am I? 1. 150; 2. 160; 3. 170; 4. 180.',
            nextStep() {
                gameObj.showQuestion(this.question, "second", "third", 'forth', 'end');
                //console.log(gameObj.step);
            }
        },
        forth: {
            nextStep() {
                console.log("You answered all " + gameObj.count + " questions correctly and earned " + gameObj.money + "!");
                gameObj.step = "end";
            }
        },
        readInput() {
            var answer = document.querySelector('input').value;
            return answer;
        }
    };
    
    var inputEvent = document.querySelector('input');
    inputEvent.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            gameObj.readInput();
        }
    });
    gameObj.run();