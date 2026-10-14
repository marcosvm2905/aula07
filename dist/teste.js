"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./src/logger");
async function testar() {
    await (0, logger_1.log)("Primeira mensagem de log!");
    await (0, logger_1.log)("Testando o appendFile...");
    const todosOsLogs = await (0, logger_1.lerLogs)();
    console.log("Logs salvos no arquivo:", todosOsLogs);
}
testar();
//# sourceMappingURL=teste.js.map