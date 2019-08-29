//Game created during the lesson
const questionContainer = document.querySelector('.question');
const history = document.querySelector('.history');
const form = document.querySelector('form');
const radioButtons = document.querySelectorAll('input');

    
    const gameObj = {
        step: 'first',
        config: {
            question: '',
            firstBranch: '',
            secondBranch: ''
        },
        run() {
            while (true) {
                if (this.step == 'end') {
                    console.log("End of game");
                    break;
                } else {
                    this[this.step].nextStep();
                }
            }
        },
        showQuestion(question, firstBranch, secondBranch) {
            const answer = prompt(question).toLowerCase();
            switch (answer) {
                case 'yes': 
                    this.step = firstBranch;
                    break;
                case 'no':
                    this.step = secondBranch;
                    break;
                default:
                    console.log("Please enter answer yes or no");
            }
        },
        first: {
            question: "Answer yes or no",
            nextStep() {
                gameObj.showQuestion(this.question, 'third', 'second');
                }
        },
        second: {
            question: 'Step #2',
            nextStep() {
                gameObj.showQuestion(this.question, 'third', 'end');
            }
        },
        third: {
            question: 'Step #3',
            nextStep() {
                gameObj.showQuestion(this.question, 'end', 'end');
            }
        },
    };
gameObj.run();