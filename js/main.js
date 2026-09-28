import { iniciarRouter } from './modules/router.js';
import { configurarEventos } from './modules/eventos.js';

document.addEventListener('DOMContentLoaded', () => {
  iniciarRouter();
  configurarEventos();
});