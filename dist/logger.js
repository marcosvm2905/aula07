"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
exports.lerLogs = lerLogs;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
// Define o caminho do arquivo de log
const CAMINHO_LOG = path_1.default.join(__dirname, "app.log");
async function log(mensagem) {
    const timestamp = new Date().toISOString();
    // Adiciona a quebra de linha (\n) no final para que cada log fique em uma linha
    const linha = `[${timestamp}] ${mensagem}\n`;
    await promises_1.default.appendFile(CAMINHO_LOG, linha, "utf-8");
}
async function lerLogs() {
    try {
        const conteudo = await promises_1.default.readFile(CAMINHO_LOG, "utf-8");
        // Divide o texto em um array usando a quebra de linha como separador
        // O filter remove possíveis linhas vazias no final do arquivo
        return conteudo.split("\n").filter(linha => linha.trim() !== "");
    }
    catch (erro) {
        // Se o arquivo ainda não existir, o readFile lança um erro. 
        // Capturamos o erro e retornamos um array vazio de forma segura.
        return [];
    }
}
//# sourceMappingURL=logger.js.map