import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Wesley", 10000, 11122233344);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Valdir", 7000, 11122233344);
gerente.cadastrarSenha("123456");

const cliente = new Cliente("Lais", 11122233344, "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(clienteEstaLogado);