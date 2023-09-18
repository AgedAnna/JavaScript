class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo; // Usamos o underscore para indicar que o saldo deve ser acessado por um getter/setter
    }

    // Getter do saldo
    get saldo() {
        return this._saldo;
    }

    // Setter do saldo
    set saldo(novoSaldo) {
        this._saldo = novoSaldo;
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this._saldo}`);
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this._saldo}`);
        } else {
            console.log('Valor de depósito inválido.');
        }
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito, saldo = 0) {
        super(agencia, numero, 'Conta Corrente', saldo);
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo = 0) {
        super(agencia, numero, 'Conta Poupança', saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo = 0) {
        super(agencia, numero, 'Conta Universitária', saldo);
    }

    sacar(valor) {
        if (valor <= 500 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this._saldo}`);
        } else if (valor > 500) {
            console.log('Saque não permitido. Valor máximo de saque para conta universitária é de R$500.');
        } else {
            console.log('Saldo insuficiente.');
        }
    }
}

// Exemplo de uso:

const contaCorrente = new ContaCorrente('001', '12345', 1000, 2000);
const contaPoupanca = new ContaPoupanca('002', '67890', 5000);
const contaUniversitaria = new ContaUniversitaria('003', '54321', 1000);

contaCorrente.sacar(500); // Saque de R$500 realizado com sucesso. Saldo atual: R$1500
contaPoupanca.depositar(1000); // Depósito de R$1000 realizado com sucesso. Saldo atual: R$6000
contaUniversitaria.sacar(300); // Saque de R$300 realizado com sucesso. Saldo atual: R$700
contaUniversitaria.sacar(600); // Saque não permitido. Valor máximo de saque para conta universitária é de R$500.
