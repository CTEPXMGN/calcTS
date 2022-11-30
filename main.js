var firstNumber = document.querySelector('.first-number');
var secondNumber = document.querySelector('.second-number');
var operator = document.querySelector('.operator');
var resultButton = document.querySelector('.result-button');
var resultDisplay = document.querySelector('.result');
var results = document.querySelector('.results-save');
var qwerty = '';
resultButton === null || resultButton === void 0 ? void 0 : resultButton.addEventListener('click', function () {
    var firstNum = Number(firstNumber.value);
    var secondNum = Number(secondNumber.value);
    if (!isNaN(firstNum) && !isNaN(secondNum)) {
        switch (operator.value) {
            case '+':
                resultDisplay.textContent = firstNum + secondNum;
                firstNumber.value = '';
                secondNumber.value = '';
                addResult(resultDisplay.textContent);
                break;
            case '-':
                resultDisplay.textContent = firstNum - secondNum;
                firstNumber.value = '';
                secondNumber.value = '';
                addResult(resultDisplay.textContent);
                break;
            case '*':
                resultDisplay.textContent = firstNum * secondNum;
                firstNumber.value = '';
                secondNumber.value = '';
                addResult(resultDisplay.textContent);
                break;
            case '/':
                resultDisplay.textContent = firstNum / secondNum;
                firstNumber.value = '';
                secondNumber.value = '';
                addResult(resultDisplay.textContent);
                break;
            default:
                break;
        }
        ;
    }
    else {
        alert('Введите чмсла');
    }
    ;
});
// Сохраняем результат
function addResult(num) {
    var div = document.createElement('div');
    div.textContent = num;
    div.addEventListener('click', function () {
        this.remove();
    });
    results === null || results === void 0 ? void 0 : results.appendChild(div);
}
;
