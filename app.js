const keys = document.querySelectorAll('button');
console.log(keys);
const operators = ['+', '-', 'x', '/'];
let decimalAdded = false;

for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {

        const result = document.querySelector('.result__show');
        let currentResultValue = result.innerHTML;
        console.log(currentResultValue)

        let chooseBtnValue = this.innerHTML;
        console.log(chooseBtnValue)

        if (chooseBtnValue === 'RESET') {
            result.innerHTML = '';
            decimalAdded = false;

        } else if (chooseBtnValue === 'DEL') {
            result.innerHTML = currentResultValue.slice(0, -1);

        } else if (chooseBtnValue === '=') {
            let equation = currentResultValue;
            let lastChar = equation[equation.length - 1];

            equation = equation.replace(/x/g, '*');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.') {
                equation = equation.replace(/.$/, '');
            }

            if (equation) {
                result.innerHTML = eval(equation).toFixed(2);
            }
                
            decimalAdded = false;
        } else if (operators.indexOf(chooseBtnValue) > -1) {
            let lastChar = currentResultValue[currentResultValue.length - 1];
            
            if (currentResultValue != '' && operators.indexOf(lastChar) == -1) 
            result.innerHTML += chooseBtnValue;
            
            else if (currentResultValue == '' && chooseBtnValue == '-') 
            result.innerHTML += btnVal;
            
            if (operators.indexOf(lastChar) > -1 && currentResultValue.length > 1) {
                result.innerHTML = currentResultValue.replace(/.$/, chooseBtnValue);
            }
            
            decimalAdded = false;
        }
        
        else if (chooseBtnValue == '.') {
            if (!decimalAdded) {
                result.innerHTML += chooseBtnValue;
                decimalAdded = true;
            }
        }
        
        else {
            result.innerHTML += chooseBtnValue;
        }
        
        e.preventDefault();
    } 
}


const inputFirst = document.querySelector('input[id="style1"]');
const inputSecond = document.querySelector('input[id="style2"]');
const inputThird = document.querySelector('input[id="style3"]');
const body = document.querySelector('body');

[inputFirst, inputSecond, inputThird].forEach((input) => {
    input.addEventListener('change', () => {
        if (inputFirst.checked) {
            body.classList.remove('second-theme', 'third-theme');
        } else if (inputSecond.checked) {
            body.classList.add('second-theme');
            body.classList.remove('third-theme');
        } else if (inputThird.checked) {
            body.classList.add('third-theme');
            body.classList.remove('second-theme');
        }
    });
});