// Função para calcular a média e determinar o status do aluno
function calcularMediaEStatus(notas) {
    const media = Math.round((notas.reduce((a, b) => a + b, 0) / notas.length));
    let status;
  
    if (media >= 7) {
      status = 'Aprovado';
    } else if (media >= 5) {
      status = 'Em Recuperação';
    } else {
      status = 'Reprovado';
    }
  
    return [media, status];
  }
  
  // Array para armazenar os alunos e suas notas
  const alunos = [];
  
  // Função para cadastrar um aluno
  function cadastrarAluno() {
    const nomeAluno = prompt('Digite o nome do aluno:');
    const alunoExistente = alunos.find((aluno) => aluno.nome === nomeAluno);
  
    if (alunoExistente) {
      console.log('Aluno já cadastrado.');
    } else {
      const novoAluno = {
        nome: nomeAluno,
        notas: [],
      };
      alunos.push(novoAluno);
      console.log(`Aluno ${nomeAluno} cadastrado com sucesso.`);
    }
  }
  
  // Função para cadastrar notas de um aluno
  function cadastrarNotas() {
    const nomeAluno = prompt('Digite o nome do aluno:');
    const aluno = alunos.find((aluno) => aluno.nome === nomeAluno);
  
    if (!aluno) {
      console.log('Aluno não encontrado.');
      return;
    }
  
    const numeroDeNotas = 3; // Número fixo de notas
    aluno.notas = [];
    for (let i = 0; i < numeroDeNotas; i++) {
      const nota = parseFloat(prompt(`Digite a nota ${i + 1} para ${aluno.nome}:`));
      aluno.notas.push(Math.round(nota));
    }
  
    console.log(`Notas de ${aluno.nome} cadastradas com sucesso.`);
  }
  
  // Função para exibir o boletim de um aluno
  function exibirBoletim() {
    const nomeAluno = prompt('Digite o nome do aluno:');
    const aluno = alunos.find((aluno) => aluno.nome === nomeAluno);
  
    if (!aluno) {
      console.log('Aluno não encontrado.');
      return;
    }
  
    const [media, status] = calcularMediaEStatus(aluno.notas);
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Notas: ${aluno.notas.join(', ')}`);
    console.log(`Média: ${media}`);
    console.log(`Status: ${status}`);
  }
  
  // Função principal para exibir o menu e processar as opções
  function main() {
    let opcao;
  
    do {
      console.log('Menu de Opções:');
      console.log('1. Cadastrar Aluno');
      console.log('2. Cadastrar Notas');
      console.log('3. Exibir Boletim');
      console.log('4. Sair');
      opcao = parseInt(prompt('Escolha uma opção:'));
  
      switch (opcao) {
        case 1:
          cadastrarAluno();
          break;
        case 2:
          cadastrarNotas();
          break;
        case 3:
          exibirBoletim();
          break;
        case 4:
          console.log('Encerrando o programa.');
          break;
        default:
          console.log('Opção inválida. Tente novamente.');
      }
    } while (opcao !== 4);
  }
  
  // Iniciar o programa
  main();
  