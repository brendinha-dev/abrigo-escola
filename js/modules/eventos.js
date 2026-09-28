import { validarFormulario } from './validacao.js';
import { salvarCadastro } from './storage.js';

export function configurarEventos() {
  const app = document.getElementById('app');

  app.addEventListener('submit', (evento) => {
    if (evento.target.id === 'form-cadastro') {
      evento.preventDefault();

      const form = evento.target;
      const formularioValido = validarFormulario(form);

      if (formularioValido) {
        // monta um objeto simples com os dados do formulário
        const cadastro = {
          nome: form.querySelector('#nome').value,
          email: form.querySelector('#email').value,
          interesse: form.querySelector('input[name="interesse"]:checked')?.value || '',
          dataCadastro: new Date().toISOString(),
        };

        salvarCadastro(cadastro);
        console.log('Cadastro salvo no localStorage:', cadastro);
        form.reset(); // limpa o formulário depois do envio
      } else {
        console.log('Formulário contém erros — envio bloqueado.');
      }
    }
  });

  document.querySelector('nav').addEventListener('click', (evento) => {
    if (evento.target.matches('.menu a')) {
      const checkbox = document.getElementById('menu-toggle');
      if (checkbox) checkbox.checked = false;
    }
  });
}