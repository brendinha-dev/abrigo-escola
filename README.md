# 🐾 Abrigo Escola — Instituto Esdras Andrade

Site institucional (SPA) para o Projeto Abrigo Escola, ONG de proteção animal sediada em São José dos Campos (SP). Apresenta a missão da instituição, seus projetos de voluntariado/doação e um formulário de cadastro para novos voluntários e doadores.

🔗 [Acesse o repositório](https://github.com/brendinha-dev/abrigo-escola)

## 🚀 Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** (Design System com variáveis, Flexbox e CSS Grid, responsivo)
- **JavaScript (ES6 Modules)** — SPA com roteamento por hash, templates dinâmicos, validação de formulário e persistência em `localStorage`
- **Day.js** (via CDN) — formatação de datas
- **Git & GitHub** — versionamento seguindo o modelo GitFlow

## 📁 Estrutura de pastas

```
abrigo-escola/
├── html/       → index.html (ponto de entrada da SPA)
├── css/        → estilos e Design System
├── img/        → imagens do projeto
└── js/
    ├── main.js         → inicialização da aplicação
    ├── modules/        → router, templates, validação, storage, eventos
    └── data/           → dados estáticos (projetos)
```

## ⚙️ Pré-requisitos

- Navegador web atualizado (Chrome, Edge ou Firefox)
- [Visual Studio Code](https://code.visualstudio.com/)
- Extensão **Live Server** (recomendada) para rodar o projeto localmente

## 💻 Instalação e execução local

1. Clone o repositório:
   ```
   git clone https://github.com/brendinha-dev/abrigo-escola.git
   ```
2. Abra a pasta no VS Code.
3. Clique com o botão direito em `html/index.html` e selecione **"Open with Live Server"**.
4. O site abrirá automaticamente no navegador, em `http://127.0.0.1:5500/html/index.html`.

Não há dependências externas a instalar via npm — o projeto é 100% front-end estático, sem processo de build.

## 🌿 Versionamento (GitFlow)

O projeto segue o modelo GitFlow:

- `main` → versões estáveis, prontas para produção
- `develop` → desenvolvimento contínuo, integra funcionalidades já concluídas
- `feature/*` → branches de funcionalidades específicas (ex: `feature/melhorias-visuais`)
- `hotfix/*` → correções urgentes na versão em produção

Os commits seguem o padrão **Conventional Commits** (`feat:`, `fix:`, `docs:`, `chore:`, `style:`), e as versões são marcadas com tags de versionamento semântico (ex: `v1.0.0`).

## ♿ Acessibilidade

O projeto segue as diretrizes **WCAG 2.1 (Nível AA)**: contraste mínimo de 4.5:1, textos alternativos em imagens, navegação completa por teclado e uso de HTML semântico.

## 📄 Licença

Projeto acadêmico, desenvolvido para a disciplina de Desenvolvimento Front-end (ADS/UDF).