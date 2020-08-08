let add = function(a,b) {
    return a + b;
}
let subtract = function(a,b) {
    return a - b;
}
let multiply = function(a,b) {
    return a * b;
}
let divide = function(a,b) {
    return a / b;
}
let operator = function(operate,a,b) {
    if (operate === '+') {
        return add(a,b);
    } else if (operate === '-') {
        return subtract(a,b);
    } else if (operate === '*') {
        return multiply(a,b);
    } else if (operate === '/') {
        return divide(a,b);
    }
}
let screen = document.querySelector('div');
let buttons = document.querySelector('.btns');
let data = ''
buttons.addEventListener('click', e => {
    if(typeof e.target.value !== 'undefined'){
        data += e.target.value;
        screen.textContent = data;   
    }  
    if(e.target.value === 'Back'){
        data = data.slice(0,-5);
        screen.textContent = data;
    }
    if(e.target.value === '='){
        const regex = /[\d.]+|[-+\*\/]/g;
        const parsed = data.match(regex);
        data = data.slice(0,-1);
        screen.textContent = data;
        if (parsed && parsed.length && !isNaN(parsed[0])) {
            let numOne = Number(parsed[0]);
            for (let i = 1; i < data.length - 1; i++) {
              if ("+-*/".includes(parsed[i]) && !isNaN(parsed[i+1])) {
                numOne = operator(parsed[i], numOne, Number(parsed[i+1]));
                screen.textContent = numOne;
              }
            }
            data = numOne;
        } 
    }
    if(e.target.value === 'Clear'){
        data = '';
        screen.textContent = data;
    }
   
})
