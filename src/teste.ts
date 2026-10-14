import { log, lerLogs } from "./logger";

async function testar() {
  await log("Primeira mensagem de log!");
  await log("Testando o appendFile...");
  
  const todosOsLogs = await lerLogs();
  console.log("Logs salvos no arquivo:", todosOsLogs);
}

testar();