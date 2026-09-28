import { templateInicio, templateProjetos, templateCadastro } from './templates.js';
import { projetos } from '../data/projetos.js';

// Tabela de rotas: associa cada "endereço" hash à função que gera seu HTML
const rotas = {
  '': templateInicio,
  '#/': templateInicio,
  '#/projetos': () => templateProjetos(projetos), // agora passa a lista de dados
  '#/cadastro': templateCadastro,
};

// Função principal: limpa o container e injeta o novo conteúdo
function renderizarRota() {
  const hashAtual = window.location.hash || '#/';
  const template = rotas[hashAtual] || templateInicio;
  const container = document.getElementById('app');

  container.innerHTML = '';          // limpa o conteúdo anterior
  container.innerHTML = template();  // injeta o novo fragmento HTML

  atualizarLinkAtivo(hashAtual);
}

// Destaca visualmente o link do menu correspondente à rota atual
function atualizarLinkAtivo(hashAtual) {
  document.querySelectorAll('nav a').forEach(link => {
    const rotaDoLink = link.getAttribute('href');
    link.classList.toggle('ativo', rotaDoLink === hashAtual);
  });
}

export function iniciarRouter() {
  window.addEventListener('hashchange', renderizarRota); // dispara ao trocar de rota
  renderizarRota(); // renderiza a rota inicial assim que a app carrega
}