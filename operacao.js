// função de executar as outras funcões, é preciso estanciar elas após o codigo;

function executar(fn, num1 = 0, num2 = 0) {
    if (typeof fn === 'function') {
        console.log(fn(num1, num2));
    }
}

function som(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

executar(som, 20, 2);
executar(sub, 1000, 750);
executar(mult, 25, 5);
executar(div, 25, 5);
