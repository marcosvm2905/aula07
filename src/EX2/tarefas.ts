import fs from "fs/promises";
import path from "path";

const CAMINHO_ARQUIVO = path.join(__dirname, "tarefas.json");

export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

export async function lerTarefas(): Promise<Tarefa[]> {
  try {
    const dados = await fs.readFile(CAMINHO_ARQUIVO, "utf-8");
    return JSON.parse(dados);
  } catch {
    return [];
  }
}

export async function salvarTarefas(tarefas: Tarefa[]): Promise<void> {
  await fs.writeFile(CAMINHO_ARQUIVO, JSON.stringify(tarefas, null, 2), "utf-8");
}

export async function adicionar(titulo: string): Promise<Tarefa> {
  const tarefas = await lerTarefas();
  
  const maiorId = tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id)) : 0;
  const nova: Tarefa = { id: maiorId + 1, titulo, concluida: false };
  
  tarefas.push(nova);
  await salvarTarefas(tarefas);
  return nova;
}

export async function concluir(id: number): Promise<void> {
  const tarefas = await lerTarefas();
  const index = tarefas.findIndex(t => t.id === id);
  
  if (index !== -1) {
    tarefas[index].concluida = true;
    await salvarTarefas(tarefas);
  } else {
    console.log(`Tarefa com ID ${id} não encontrada.`);
  }
}

export async function remover(id: number): Promise<void> {
  const tarefas = await lerTarefas();
  const tarefasAtualizadas = tarefas.filter(t => t.id !== id);
  
  await salvarTarefas(tarefasAtualizadas);
}