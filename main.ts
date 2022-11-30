let firstNumber: Element | null = document.querySelector('.first-number');
let secondNumber: Element | null = document.querySelector('.second-number');
let operator: Element | null = document.querySelector('.operator');
let resultButton: Element | null = document.querySelector('.result-button');
let resultDisplay: any = document.querySelector('.result');
let results: Element | null = document.querySelector('.results-save');

let qwerty: any = ''

resultButton?.addEventListener('click', function() {
    let firstNum: number = Number((<HTMLInputElement>firstNumber).value);
    let secondNum: number = Number((<HTMLInputElement>secondNumber).value);

    if (!isNaN(firstNum) && !isNaN(secondNum)) {
        switch ((<HTMLInputElement>operator).value) {
            case '+':
                resultDisplay.textContent = firstNum + secondNum;
                (<HTMLInputElement>firstNumber).value = '';
                (<HTMLInputElement>secondNumber).value = '';
                addResult(resultDisplay.textContent);
                break;
            case '-':
                resultDisplay.textContent = firstNum - secondNum;
                (<HTMLInputElement>firstNumber).value = '';
                (<HTMLInputElement>secondNumber).value = '';
                addResult(resultDisplay.textContent);
                break;
            case '*':
                resultDisplay.textContent = firstNum * secondNum;
                (<HTMLInputElement>firstNumber).value = '';
                (<HTMLInputElement>secondNumber).value = '';
                addResult(resultDisplay.textContent);
                break;
            case '/':
                resultDisplay.textContent = firstNum / secondNum;
                (<HTMLInputElement>firstNumber).value = '';
                (<HTMLInputElement>secondNumber).value = '';
                addResult(resultDisplay.textContent);
                break;            
            default:
                break;
        };
    } else {
        alert('Введите чмсла');
    };
});

// Сохраняем результат

function addResult(num) {
    let div = document.createElement('div');
    div.textContent = num;
    div.addEventListener('click', function() {
        this.remove();
    })
    results?.appendChild(div);
};