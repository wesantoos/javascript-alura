import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupança.js"
import { ContaSalario } from "./Conta/ContaSalario.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//Cliente 1 - Criação da conta corrente e login
const login1 = new Cliente("Wesley", 11122233344, "123456");
const cliente1 = new ContaCorrente(0, login1, 1001);

//Cliente 2 - Criação da conta Poupança e login
const login2 = new Cliente("Pedro", 11122233344, "123456");
const cliente2 = new ContaPoupanca(0, login2, 1001)

//Cliente 3 - Criação da conta Salario e login
const login3 = new Cliente("Maria", 11122233344, "123456");
const cliente3 = new ContaSalario(0, login3, 1001)

//Acoes entre os clientes
cliente1.depositar(100);
cliente2.depositar(200);
cliente3.depositar(300);

cliente1.transferir(50, cliente2);
cliente3.transferir(200, cliente1);

cliente1.sacar(50);
cliente2.sacar(100);
cliente3.sacar(200);

console.log(cliente1, cliente2, cliente3);

//Sistema de autenticação de login e senha

const clienteEstaLogado = SistemaAutenticacao.login(login1, "123456");

console.log(clienteEstaLogado);