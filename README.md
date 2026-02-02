Form Validator SPA  
Sistema Single Page Application (SPA) com validação de formulário, templates em JavaScript e efeito visual com particles.js.

Este projeto foi desenvolvido para demonstrar habilidades em:
- Manipulação de DOM  
- Criação de SPA sem frameworks  
- Templates JavaScript dinamicamente renderizados  
- Validação de formulário  
- Organização do código em múltiplos arquivos  
- Versionamento completo via GitHub (branches, PRs, issues, milestones)

---

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript puro (Vanilla JS)**
- **Particles.js**
- **Git & GitHub** (Issues, Milestones, Pull Requests)

---

## Funcionalidades do Sistema
- Sistema SPA (Single Page Application)  
- Navegação entre páginas sem recarregar  
- Formulário de cadastro com validação  
- Mensagens de erro amigáveis ao usuário  
- Sistema de templates com JavaScript  
- Particles.js no background com estilo moderno  
- Estrutura de pastas limpa e organizada  
- Versionamento completo com commits padronizados  

---

Estrutura do projeto:
/css
style.css

/js
app.js
router.js
templates.js
validador.js

/img
(imagens opcionais)

index.html

---
## Como Executar o Projeto

1. Faça o download do repositório  
2. Abra o arquivo **index.html** no navegador  
3. O sistema irá carregar automaticamente  
4. Use o menu para navegar entre as telas  
5. Teste o formulário e veja as mensagens de validação  

---

##  Validações Implementadas

- Nome com mínimo de **3 caracteres**
- Email precisa conter **@** e **.**
- Mensagens claras abaixo dos campos
- Bloqueio do envio do formulário até tudo estar correto

---

##  Particles.js

O background animado usa **particles.js**, configurado em `app.js` dentro da função: initParticles()

---

Estrutura SPA
A SPA segue este fluxo:

router.js controla navegação

templates.js contém HTML dinâmico

app.js inicializa a aplicação

O conteúdo é renderizado no elemento:
<main id="app"></main>

---
MIT License
Este projeto é open-source.

