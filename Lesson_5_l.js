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
        // const startStep = parseInt(prompt('Введите номер шага, что бы начать'), 10);
        const steps = {
            '1': 'first',
            '2': 'second',
            '3': 'third',
        };
        this.step = steps['1'] || 'first';
        this[this.step].nextStep();
    },
    setAnswer(event, question, firstBranch, secondBranch) {
        switch (event.target.value) {
            case 'да':
                this.step = firstBranch;
                break;
            case 'нет':
                this.step = secondBranch;
                break;
            default:
                console.log('Нужно ответить "да" или "нет"');
        }
        const newAnswer = document.createElement('li');
        newAnswer.innerText = `${question} - ${event.target.value}`;
        history.append(newAnswer);
        form.reset();
        if (this.step !== 'end') {
            this[this.step].nextStep();
        } else {
            radioButtons.forEach(radio => radio.remove());
        }
    },
    listener(e) {
        this.setAnswer(e, this.question, this.firstBranch, this.secondBranch);
    },
    showQuestion(question, firstBranch, secondBranch) {
        questionContainer.innerText = question;
        this.question = question;
        this.firstBranch = firstBranch;
        this.secondBranch = secondBranch;
    },
    first: {
        question: 'Нужен ответ "да" или "нет"',
        nextStep() {
            gameObj.showQuestion(this.question, 'third', 'second');
        }
    },
    second: {
        question: 'Шаг номер 2',
        nextStep() {
            gameObj.showQuestion(this.question, 'third', 'end');
        }
    },
    third: {
        question: 'Шаг номер 3',
        nextStep() {
            this.step = null;
            gameObj.showQuestion(this.question, 'end', 'end');
        }
    },
};

radioButtons.forEach((radio) => {
    radio.addEventListener('click', gameObj.listener.bind(gameObj));
});
gameObj.run();
