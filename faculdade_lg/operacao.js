function executar(fn, num1 = 0, num2 = 0) {
    if (typeof fn === 'function') {
      return fn(num1, num2);  
    }
  }
  
  function som(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mult(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
  while (true) {  
    var opcao = parseInt(prompt("Digite 1 para somar, 2 para sub, 3 para mult, 4 para div, 5 para sair: "));
  
    if (opcao === 5) {
      console.log("Saindo");
      break;  
    } else if (opcao >= 1 && opcao <= 4) {
      var x = parseFloat(prompt("Digite x: "));
      var y = parseFloat(prompt("Digite y: "));
  
      if (opcao === 1) {
        console.log("Resultado:", executar(som, x, y));
      } else if (opcao === 2) {
        console.log("Resultado:", executar(sub, x, y));
      } else if (opcao === 3) {
        console.log("Resultado:", executar(mult, x, y));
      } else if (opcao === 4) {
        if (y !== 0) {
          console.log("Resultado:", executar(div, x, y));
        } else {
          console.log("Não é possível dividir por zero.");
        }
      }
    } else {
      console.log("Opção inválida");
    }
  }