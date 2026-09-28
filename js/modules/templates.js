export function templateInicio() {
  return `
    <div class="container">
      <div class="grid">
        <section id="apresentacao" class="col-12">
          <h1>Instituto Esdras Andrade — Projeto Abrigo Escola</h1>
          <p>Somos uma organização não governamental sediada em São José dos Campos (SP), dedicada ao resgate, cuidado e reabilitação de cães e gatos vítimas de abandono e maus-tratos. Hoje, abrigamos centenas de animais em busca de um novo lar cheio de amor e dignidade.</p>
          <img src="../img/equipe-voluntarios.jpeg" alt="Voluntários cuidando de cães e gatos resgatados no abrigo" width="600">
        </section>

        <section id="missao" class="col-6">
          <h2>Nossa Missão</h2>
          <p>Resgatar, tratar e cuidar de animais em situação de abandono e maus-tratos, promovendo castração, vacinação e a busca por lares responsáveis, além de conscientizar a comunidade sobre a importância da posse responsável.</p>
        </section>

        <section id="como-ajudar" class="col-6">
          <h2>Como Você Pode Ajudar</h2>
          <p>Seja como doador, voluntário ou apadrinhador, sua ajuda é fundamental. <a href="#/cadastro">Cadastre-se agora</a> e junte-se a essa causa.</p>
        </section>
      </div>
    </div>`;
}

/* ===== NOVO: gera o HTML de UM card, a partir de um objeto de projeto ===== */
function gerarCardProjeto(projeto) {
  const classeBadge = projeto.categoria === 'Voluntariado' ? 'badge-voluntariado' : 'badge-doacao';
  const badgeUrgente = projeto.urgente
    ? '<span class="badge badge-urgente">Urgente</span>'
    : '';

  return `
    <article class="card col-6">
      <span class="badge ${classeBadge}">${projeto.categoria}</span>
      ${badgeUrgente}
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </article>`;
}

/* ===== NOVO: percorre a LISTA de projetos e gera todos os cards de uma vez ===== */
function gerarListaCards(listaProjetos) {
  return listaProjetos.map(gerarCardProjeto).join('');
}

/* ===== ALTERADO: agora recebe "listaProjetos" como parâmetro ===== */
export function templateProjetos(listaProjetos) {
  return `
    <div class="container">
      <h1>Nossos Projetos</h1>
      <p>Conheça as frentes de atuação do Projeto Abrigo Escola:</p>
      <div class="grid">
        ${gerarListaCards(listaProjetos)}
      </div>

      <section id="doacoes">
        <h2>Como Doar</h2>
        <p>Sua contribuição ajuda a custear despesas veterinárias, alimentação e manutenção do abrigo:</p>
        <table>
          <thead><tr><th>Valor</th><th>O que custeia</th></tr></thead>
          <tbody>
            <tr><td>R$ 30</td><td>Ração para um animal por 1 semana</td></tr>
            <tr><td>R$ 80</td><td>Vacinação completa de um animal</td></tr>
            <tr><td>R$ 150</td><td>Castração de um animal</td></tr>
          </tbody>
        </table>
      </section>

      <section id="cta-cadastro">
        <h2>Quer fazer parte dessa causa?</h2>
        <p><a href="#/cadastro">Cadastre-se agora</a> como voluntário ou doador.</p>
      </section>
    </div>`;
}

export function templateCadastro() {
  return `
    <div class="container">
      <h1>Cadastre-se Como Voluntário ou Doador</h1>
      <p>Preencha o formulário abaixo para fazer parte da nossa rede de apoio.</p>

      <form id="form-cadastro" novalidate>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label for="nome">Nome completo:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite aqui" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="Digite aqui" required>

          <label for="nascimento">Data de nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" required>

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" placeholder="000.000.000-00" title="Formato: 000.000.000-00" required>

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" placeholder="(00) 00000-0000" title="Formato: (00) 00000-0000" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" pattern="[0-9]{5}-[0-9]{3}" placeholder="00000-000" title="Formato: 00000-000" required>

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" placeholder="Digite aqui" required>

          <label for="estado">Estado:</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option value="SP">São Paulo</option>
            <option value="GO">Goiás</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Área de Interesse</legend>
          <p>Deseja se cadastrar como:</p>
          <div class="radio-group">
            <input type="radio" id="voluntario" name="interesse" value="voluntario" required>
            <label for="voluntario">Voluntário</label>
          </div>
          <div class="radio-group">
            <input type="radio" id="doador" name="interesse" value="doador">
            <label for="doador">Doador</label>
          </div>

          <label for="observacoes">Observações (opcional):</label>
          <textarea id="observacoes" name="observacoes" rows="4"></textarea>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
      </form>
    </div>`;
}