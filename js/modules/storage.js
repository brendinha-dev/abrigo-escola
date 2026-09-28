const CHAVE = 'abrigoescola_cadastros';

export function salvarCadastro(novoCadastro) {
  const listaAtual = obterCadastros();
  listaAtual.push(novoCadastro);
  localStorage.setItem(CHAVE, JSON.stringify(listaAtual));

  // NOVO: usa o Day.js para formatar a data de forma legível no console
  const dataFormatada = dayjs(novoCadastro.dataCadastro).format('DD/MM/YYYY [às] HH:mm');
  console.log(`Cadastro de ${novoCadastro.nome} salvo em ${dataFormatada}.`);
}

export function obterCadastros() {
  const dadosSalvos = localStorage.getItem(CHAVE);
  return dadosSalvos ? JSON.parse(dadosSalvos) : [];
}