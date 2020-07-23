import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static numeroDeContas = 0;

    constructor(saldoInicial, cliente, agencia) {
        super(0, cliente, agencia);
        ContaPoupanca.numeroDeContas += 1;
    }

    //Sobrescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.03;
        return this._sacar(valor, taxa);
    }
}