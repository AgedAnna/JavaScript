class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
        this.transacoes = [];
    }

    depositar(valor) {
        this.saldo += valor;
        this.transacoes.push(`Depósito de R$${valor}`);
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            this.transacoes.push(`Saque de R$${valor}`);
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    getHistorico() {
        return this.transacoes;
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
        if (valor <= 500) {
            super.sacar(valor);
        }
    }
}

const accounts = [];

document.getElementById("insert-button").addEventListener("click", () => {
    const accountType = document.getElementById("account-type").value;
    const agency = document.getElementById("agency").value;
    const number = document.getElementById("account-number").value;
    const balance = parseFloat(document.getElementById("balance").value);
    let account;

    if (accountType === "ContaBancaria") {
        account = new ContaBancaria(agency, number, accountType, balance);
    } else if (accountType === "ContaCorrente") {
        const creditCard = document.getElementById("credit-card").value;
        account = new ContaCorrente(agency, number, balance, creditCard);
    } else if (accountType === "ContaPoupanca") {
        account = new ContaPoupanca(agency, number, balance);
    } else if (accountType === "ContaUniversitaria") {
        account = new ContaUniversitaria(agency, number, balance);
    }

    accounts.push(account);
    clearFields();
});

document.getElementById("delete-button").addEventListener("click", () => {
    const index = document.getElementById("account-list").selectedIndex;
    if (index !== -1) {
        accounts.splice(index, 1);
    }
    clearFields();
});

document.getElementById("view-button").addEventListener("click", () => {
    showAccounts();
});

function clearFields() {
    document.getElementById("agency").value = "";
    document.getElementById("account-number").value = "";
    document.getElementById("balance").value = "";
    document.getElementById("credit-card").value = "";
}

function showAccounts() {
    const accountList = document.getElementById("account-list");
    accountList.innerHTML = "";
    for (const account of accounts) {
        const listItem = document.createElement("li");
        listItem.textContent = `Agência: ${account.agencia}, Número: ${account.numero}, Tipo: ${account.tipo}, Saldo: R$${account.saldo}`;
        const historico = account.getHistorico();
        if (historico.length > 0) {
            const historicoText = `Histórico: ${historico.join(', ')}`;
            listItem.textContent += ` - ${historicoText}`;
        }
        accountList.appendChild(listItem);
    }
}
