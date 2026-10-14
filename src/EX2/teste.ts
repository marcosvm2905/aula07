import { adicionar, concluir, remover, lerTarefas } from "./tarefas";

async function testar() {
  console.log("Tarefas iniciais:", await lerTarefas());
  
  await adicionar("Estudar para Sistemas");


  //await concluir(1);
  //await remover(1);

  console.log("Tarefas finais:", await lerTarefas());
}

testar();