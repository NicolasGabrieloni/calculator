// Elementos del DOM

let result = document.querySelector(".resultado")
const buttons = document.querySelectorAll("#number");
const buttonsOp = document.querySelectorAll("#op");
const buttonDel = document.querySelector(".del");
const buttonIqual = document.querySelector(".igual");
const buttonRst = document.querySelector(".rst")
let opActual = '';
let opAnterior = '';
let operacion = undefined;
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");


// Eventos
buttons.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);
    })
})

buttonsOp.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOp(boton.innerText);
    })
})

buttonIqual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
})

buttonDel.addEventListener('click', function () {
    clear();
    actualizarDisplay();
})

buttonRst.addEventListener('click', function () {
    clear();
    actualizarDisplay();
})

two.addEventListener('click', function () {
    let body = document.querySelector(".body");
    let circle = document.querySelector(".circle");
    body.classList.add('active1');
    body.classList.remove('active2');
    circle.style.left = '35%'
})

one.addEventListener('click', function () {
    let body = document.querySelector(".body");
    let circle = document.querySelector(".circle");
    body.classList.remove('active1');
    body.classList.remove('active2');
    circle.style.left = '0%'
})

three.addEventListener('click', function () {
    let body = document.querySelector(".body");
    let circle = document.querySelector(".circle");
    body.classList.add('active2');
    body.classList.remove('active1')
    circle.style.left = '71%'
})



// Metodos

function agregarNumero(num) {
    opActual = opActual.toString() + num.toString();
    actualizarDisplay()
}

function clear() {
    opActual = '';
    opAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = opActual;
}

function selectOp(op) {
    if (opActual === '') return;
    if (opAnterior !== '') {
        calcular()
    }
    operacion = op.toString();
    opAnterior = opActual;
    opActual = '';
}

function calcular() {
    let calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opActual = calculo;
    operacion = undefined;
    opAnterior = '';

}

clear()