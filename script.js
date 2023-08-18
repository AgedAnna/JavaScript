function verificarEntrada(entrada){
  if(typeof entrada === 'number'){
    if (entrada % 2 == 0){
      console.log('par');
    } else{
      console.log('impar');
    }
  
  } else if(typeof entrada === 'string'){
      console.log('A entrada é uma string');
  } else{
    console.log('A entrada não é do tipo esperado');
  }
}

for (var i = 0; i < 2; i++){
  verificarEntrada(2);
  verificarEntrada('2');
}