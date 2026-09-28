// Cada regra: qual campo, qual RegEx testa o valor, e qual mensagem mostrar se falhar
const regras = [
  { id: 'nome', regex: /^.{3,}$/, mensagem: 'Digite seu nome completo (mínimo 3 letras).' },
  { id: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, mensagem: 'Digite um e-mail válido.' },
  { id: 'cpf', regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, mensagem: 'CPF deve estar no formato 000.000.000-00.' },
  { id: 'telefone', regex: /^\(\d{2}\) \d{5}-\d{4}$/, mensagem: 'Telefone deve estar no formato (00) 00000-0000.' },
  { id: 'cep', regex: /^\d{5}-\d{3}$/, mensagem: 'CEP deve estar no formato 00000-000.' },
];

// Valida UM campo específico e atualiza sua aparência + mensagem
function validarCampo(campo, regex, mensagem) {
  const valor = campo.value.trim();
  const valido = regex.test(valor);

  // remove mensagem de erro antiga, se existir, antes de decidir se cria outra
  const erroExistente = campo.parentElement.querySelector('.mensagem-erro');
  if (erroExistente) erroExistente.remove();

  if (valido) {
    campo.classList.remove('campo-erro');
    campo.classList.add('campo-sucesso');
  } else {
    campo.classList.remove('campo-sucesso');
    campo.classList.add('campo-erro');

    const spanErro = document.createElement('span');
    spanErro.className = 'mensagem-erro';
    spanErro.textContent = mensagem;
    campo.insertAdjacentElement('afterend', spanErro);
  }

  return valido;
}

// Função principal: percorre TODAS as regras e retorna true só se tudo passar
export function validarFormulario(form) {
  let tudoValido = true;

  regras.forEach(({ id, regex, mensagem }) => {
    const campo = form.querySelector(`#${id}`);
    if (campo) {
      const valido = validarCampo(campo, regex, mensagem);
      if (!valido) tudoValido = false;
    }
  });

  return tudoValido;
}