const CHAVE_TEMA = 'abrigoescola_contraste';

export function iniciarTema() {
  const salvo = localStorage.getItem(CHAVE_TEMA);
  if (salvo === 'alto') aplicarAltoContraste(true);

  document.getElementById('btn-contraste').addEventListener('click', () => {
    const ativo = document.body.getAttribute('data-contraste') === 'alto';
    aplicarAltoContraste(!ativo);
    localStorage.setItem(CHAVE_TEMA, !ativo ? 'alto' : 'normal');
  });
}

function aplicarAltoContraste(ativar) {
  const btn = document.getElementById('btn-contraste');
  if (ativar) {
    document.body.setAttribute('data-contraste', 'alto');
    btn.setAttribute('aria-pressed', 'true');
  } else {
    document.body.removeAttribute('data-contraste');
    btn.setAttribute('aria-pressed', 'false');
  }
}