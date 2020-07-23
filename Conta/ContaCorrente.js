import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(saldoInicial, cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //Sobrescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.05;
        return this._sacar(valor, taxa);
    }
}