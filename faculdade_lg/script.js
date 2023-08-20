function verificarEntrada(entrada) {
  if (typeof entrada === 'number') {
    if (entrada % 2 === 0) {
      console.log('Par');
    } else {
      console.log('Ímpar');
    }
  } else if (typeof entrada === 'string') {
    console.log('A entrada é uma string');
  } else {
    console.log('A entrada não é do tipo esperado');
  }
}

var continuar = true;

while (continuar) {
  var userInput = prompt("Digite um valor (ou digite 'sair' para sair): ");

  if (userInput === 'sair') {
    continuar = false;
    console.log('Saindo do programa.');
  } else {
    var parsedValue = parseFloat(userInput);
    if (isNaN(parsedValue)) {
      verificarEntrada(userInput);  
    } else {
      verificarEntrada(parsedValue); 
    }
  }
}