var dataAtual = new Date();
var ano = dataAtual.getFullYear();
var mes = dataAtual.getMonth() + 1;
var dia = dataAtual.getDate();
var dia = [dia,mes,ano].join('/')


class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
        this.extrato = [];
    }

    depositar(valor) {
        if (valor <= 0){
            alert("Valor não aceito")
        }
        else{
            this.saldo += valor;
            this.extrato.push({Operaçao:"Depósito", Valor:valor, data:dia})
        }
        
    }

    sacar(valor) {
        if (valor <= this.saldo && valor > 0) {
            this.saldo -= valor;
            this.extrato.push({Operaçao:"Saque", Valor:valor, data:dia})
        } else {
            alert("Saldo insuficiente ou Valor não aceito.");
        }
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
    }
    
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }

    sacar(valor) {
        if (valor <= 500 && valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            alert("Limite de saque excedido ou saldo insuficiente.");

        }
    }
}

const contas = [];

function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    let novaConta;

    if (tipo === "Conta Corrente") {
        novaConta = new ContaCorrente(agencia, numero, saldo, 1000); // Cartão de crédito padrão de R$ 1000
    } else if (tipo === "Conta Poupança") {
        novaConta = new ContaPoupanca(agencia, numero, saldo);
    } else if (tipo === "Conta Universitária") {
        novaConta = new ContaUniversitaria(agencia, numero, saldo);
    }

    contas.push(novaConta);
    atualizarListaDeContas();
}

function deletarConta() {
    const contaToDelete = document.getElementById("contaToDelete").value;
    if (contaToDelete !== "") {
        contas.splice(contaToDelete, 1);
        atualizarListaDeContas();
    }
}


function atualizarListaDeContas() {
    const listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = "";

    for (let i = 0; i < contas.length; i++) {
        const conta = contas[i];
        const itemLista = document.createElement("li");
        itemLista.textContent = `${conta.tipo} - Agência: ${conta.agencia} Número: ${conta.numero} Saldo: R$ ${conta.saldo.toFixed(2)}`;
        listaContas.appendChild(itemLista);

    }

    // Atualizar a lista de contas para selecionar
    const contaToDeleteSelect = document.getElementById("contaToDelete");
    contaToDeleteSelect.innerHTML = "<option value=''>Selecione uma conta</option>";
    for (let i = 0; i < contas.length; i++) {
        const conta = contas[i];
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `${conta.tipo} - Agência: ${conta.agencia}, Número: ${conta.numero}`;
        contaToDeleteSelect.appendChild(option);
    }
}

function visualizarContas() {
    const contaselect = document.getElementById("contaToDelete").value;
    const conta = contas[contaselect]
    const parag = document.getElementById("contaselect")
    if(contaselect == ""){
        parag.innerHTML = ""
    } 
    else{
        parag.innerHTML = `<p>${conta.tipo} <br>Agência: ${conta.agencia}<br>Número: ${conta.numero}<br>Saldo: R$ ${conta.saldo}</p>`
    }

    const listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = "";

    for (let i = 0; i < contas.length; i++) {
        const conta = contas[i];
        const itemLista = document.createElement("li");
        itemLista.textContent = `${conta.tipo} - Agência: ${conta.agencia} Número: ${conta.numero} Saldo: R$ ${conta.saldo.toFixed(2)}`;
        listaContas.appendChild(itemLista);

    }

}

function sacar(){
    const contaselect = document.getElementById("contaToDelete").value;
    const conta = contas[contaselect]
    const valor = parseFloat(document.getElementById("valor").value)
    contas[contaselect].sacar(valor)
    visualizarContas()
}

function depositar(){
    const contaselect = document.getElementById("contaToDelete").value;
    const conta = contas[contaselect]
    const valor = parseFloat(document.getElementById("valor").value)
    contas[contaselect].depositar(valor)
    visualizarContas()
}

function extrato(){
    const contaselect = document.getElementById("contaToDelete").value;
    const boxextrato = document.getElementById("extrato")
    boxextrato.innerHTML = ""
    const conta = contas[contaselect]

    boxextrato.innerHTML += "<h1> Extrato </h1>"
    for(c = 0; c < conta.extrato.length; c++){
        const resul = conta.extrato[c]
        boxextrato.innerHTML += `<p>Operação: ${resul.Operaçao}<br>Valor: ${resul.Valor}<br>Data: ${resul.data}</p>`
    }

}

var grafic_corrent = [[],[]];
var grafic_poupanca = [[],[]];
var grafic_univers = [[],[]];

function graficoUp(){
    grafic_corrent = [[],[]];
    grafic_poupanca = [[],[]];
    grafic_univers = [[],[]];
    
    for(conta in contas){
        console.log(contas[conta].numero)
        if (contas[conta].tipo == "Conta Corrente" ){
            grafic_corrent[0].push(contas[conta].numero);
            grafic_corrent[1].push(contas[conta].saldo);
        }
        else if (contas[conta].tipo == "Conta Poupança" ){
            grafic_poupanca[0].push(contas[conta].numero);
            grafic_poupanca[1].push(contas[conta].saldo);
        }
        else if (contas[conta].tipo == "Conta Universitária" ){
            grafic_univers[0].push(contas[conta].numero);
            grafic_univers[1].push(contas[conta].saldo);
        }
    }
}

function criarGrafico(){
    graficoUp();
    grafico("Saldo Corrente","grafico_corr",grafic_corrent,0);
    grafico("Saldo Poupança","grafico_poup",grafic_poupanca,1);
    grafico("Saldo Universitário","grafico_univ",grafic_univers,2);

    
}

function grafico(titulo,id,dado,ind){
    var nome = 'chart'+ind;
    const ctx = document.getElementById(id).getContext('2d');
    nome = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dado[0],
            datasets: [{
                label: titulo,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: dado[1],
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}