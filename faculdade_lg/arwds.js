let produtos = [];
let pessoas = [];


function gerarNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

let opcao;
while (opcao !== 4) {
  console.log("Menu:");
  console.log("1 - Cadastrar Produtos");
  console.log("2 - Cadastrar Pessoas");
  console.log("3 - Sortear");
  console.log("4 - Sair");
  
  opcao = parseInt(prompt("Selecione uma opção:"));

  switch (opcao) {
    case 1:
      let novoProduto = prompt("Digite o nome do novo produto:");
      produtos.push(novoProduto);
      console.log("Produto cadastrado com sucesso!");
      break;
      
    case 2:
      let novaPessoa = prompt("Digite o nome da nova pessoa:");
      pessoas.push(novaPessoa);
      console.log("Pessoa cadastrada com sucesso!");
      break;
      
    case 3:
      if (produtos.length === 0) {
        console.log("Não há produtos cadastrados para realizar o sorteio.");
      } else {
        let numeroSorteado = gerarNumeroAleatorio(produtos.length);
        console.log(`Número sorteado: ${numeroSorteado}`);
        console.log(`Pessoa sorteada: ${pessoas[numeroSorteado]}`);
        console.log(`Produto ganho: ${produtos[numeroSorteado]}`);
      }
      break;
      
    case 4:
      console.log("Saindo do programa.");
      break;
      
    default:
      console.log("Opção inválida. Por favor, selecione uma opção válida.");
  }
}
