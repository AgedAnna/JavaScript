// Saldo inicial
let saldo = 1000;

// Array para armazenar o histórico de transações
const historicoTransacoes = [];

// Função para depositar dinheiro na conta
function depositar() {
  const valor = parseFloat(prompt('Digite o valor que deseja depositar:'));
  if (isNaN(valor) || valor <= 0) {
    console.log('Valor de depósito inválido.');
    return;
  }
  saldo += valor;
  historicoTransacoes.push({ tipo: 'Depósito', valor, data: new Date().toLocaleString() });
  console.log(`Depósito de $${valor.toFixed(2)} realizado com sucesso.`);
}

// Função para sacar dinheiro da conta
function sacar() {
  const valor = parseFloat(prompt('Digite o valor que deseja sacar:'));
  if (isNaN(valor) || valor <= 0) {
    console.log('Valor de saque inválido.');
    return;
  }
  if (valor > saldo) {
    console.log('Saldo insuficiente para realizar o saque.');
    return;
  }
  saldo -= valor;
  historicoTransacoes.push({ tipo: 'Saque', valor, data: new Date().toLocaleString() });
  console.log(`Saque de $${valor.toFixed(2)} realizado com sucesso.`);
}

// Função para verificar o saldo atual
function verSaldo() {
  console.log(`Saldo atual: $${saldo.toFixed(2)}`);
}

// Função para ver o histórico de transações
function verHistoricoTransacoes() {
  console.log('Histórico de Transações:');
  for (const transacao of historicoTransacoes) {
    console.log(`${transacao.tipo} de $${transacao.valor.toFixed(2)} em ${transacao.data}`);
  }
}

// Função principal para interagir com o usuário
function main() {
  console.log('Bem-vindo ao Sistema de Conta Bancária!');
  let opcao;

  do {
    console.log('Escolha uma opção:');
    console.log('1. Depositar');
    console.log('2. Sacar');
    console.log('3. Ver Saldo');
    console.log('4. Ver Histórico de Transações');
    console.log('5. Sair');
    opcao = parseInt(prompt('Digite o número da opção desejada:'));

    switch (opcao) {
      case 1:
        depositar();
        break;
      case 2:
        sacar();
        break;
      case 3:
        verSaldo();
        break;
      case 4:
        verHistoricoTransacoes();
        break;
      case 5:
        console.log('Obrigado por usar o Sistema de Conta Bancária. Até logo!');
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
    }
  } while (opcao !== 5);
}

// Iniciar o programa
main();
