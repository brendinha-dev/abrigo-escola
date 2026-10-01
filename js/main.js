import { iniciarRouter } from './modules/router.js';
import { configurarEventos } from './modules/eventos.js';
import { iniciarTema } from './modules/tema.js';

document.addEventListener('DOMContentLoaded', () => {
  iniciarRouter();
  configurarEventos();
  iniciarTema();
});