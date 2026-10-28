# 🏆 Campeonato de Alunos - FIEB

**Projeto fullstack para organizar e apresentar um campeonato de alunos**, desenvolvido como desafio técnico proposto pela FIEB. A aplicação seleciona 8 alunos, realiza as disputas com base na média de cada um e exibe o **pódio do campeonato**.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-green?style=flat-square)

[Sobre](#-sobre-o-projeto) · [Regras](#-regras-do-campeonato) · [Funcionalidades](#-funcionalidades) · [Tecnologias](#-tecnologias-utilizadas) · [Como executar](#%EF%B8%8F-como-executar-o-projeto) · [Créditos](#-créditos-do-projeto)

---

## Em resumo

| | |
| --- | --- |
| **O que é** | Aplicação web que monta um campeonato entre alunos e mostra o pódio |
| **Origem** | Desafio técnico da FIEB (enunciado em `Campeonato de Alunos FIEB.pdf`) |
| **Backend** | Node.js + Express |
| **Frontend** | Views em EJS, com HTML, CSS e JavaScript |
| **Dados** | Alunos simulados (mock), com a integração à API da FIEB já preparada no código |
| **Porta** | `http://localhost:9000` |

---

## 📌 Sobre o projeto

Aplicação web que permite registrar resultados de partidas entre alunos e exibir o pódio do campeonato. O **backend** é feito em Node.js com Express, o **frontend** usa views em EJS e os arquivos estáticos ficam no diretório público.

O enunciado completo do desafio está no arquivo [`Campeonato de Alunos FIEB.pdf`](./Campeonato%20de%20Alunos%20FIEB.pdf).

---

## 📏 Regras do campeonato

| Etapa | Como funciona |
| --- | --- |
| **Seleção** | O usuário escolhe exatamente 8 alunos |
| **Chaveamento** | Os alunos são ordenados em ordem alfabética. O 1º enfrenta o último, o 2º enfrenta o penúltimo, e assim por diante |
| **Partida** | Vence quem tem a maior média |
| **Desempate** | Com médias iguais, vence o aluno que vem depois na ordem alfabética |
| **Resultado** | O pódio mostra o 1º, o 2º e o 3º lugar, com nome, média e RM |

---

## 🚀 Funcionalidades

### 1. Seleção de alunos · `/`

- Lista de alunos em ordem alfabética, com nome, RM e média
- Seleção clicando em qualquer parte do card do aluno
- Aviso quando a seleção não tem exatamente 8 alunos
- Botão **Gerar campeonato**

### 2. Participantes · `/participantes-do-campeonato`

- Confirmação dos alunos selecionados para a disputa
- Botão **Carregar resultados** e opção de voltar

### 3. Resultado final · `/vencedores-do-campeonato`

- Tela de carregamento antes do resultado
- Pódio com 1º, 2º e 3º lugar

---

## 🛠 Tecnologias utilizadas

| Tecnologia | Para que serve |
| --- | --- |
| **Node.js** | Execução do servidor |
| **Express** | Rotas da aplicação e lógica do campeonato |
| **EJS** | Templates das páginas (index, campeonato e campeões) |
| **HTML, CSS e JavaScript** | Frontend e interações da seleção |
| **Bootstrap** | Estrutura e componentes da interface |
| **Nodemon** | Reinicia o servidor automaticamente durante o desenvolvimento |

---

## ⚙️ Como executar o projeto

**Pré-requisito:** Node.js.

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/lunajulia107/campeonatoDeAlunosFIEB.git
cd campeonatoDeAlunosFIEB
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Iniciar o servidor com Nodemon ou Node

```bash
npm run dev
# ou
node app.js
```

### 4️⃣ Acessar a aplicação no navegador

```
http://localhost:9000/
```

> [!NOTE]
> Hoje o projeto usa **dados simulados** de alunos, definidos em `app/routes/router.js`. O código que consome a API da FIEB (`https://fiebdigital.fieb.edu.br/TesteTecnicoApi/Aluno`) continua no mesmo arquivo, comentado. Ao usar a API, pode ser necessário atualizar a página algumas vezes devido ao carregamento da API e dos dados.

---

## 📁 Estrutura do projeto

```
campeonatoDeAlunosFIEB/
├── app/
│   ├── public/                       → arquivos estáticos (CSS, imagens, scripts)
│   ├── routes/
│   │   └── router.js                 → rotas da aplicação e lógica do campeonato
│   └── views/
│       └── pages/                    → templates EJS (index, campeonato e campeões)
├── .gitignore                        → arquivos e pastas ignoradas pelo Git
├── app.js                            → arquivo principal do servidor
├── Campeonato de Alunos FIEB.pdf     → enunciado do desafio
├── package.json                      → gerenciador de pacotes npm
├── README.md                         → documentação do projeto
└── site.webmanifest                  → manifesto do site (PWA, ícones)
```

---

## 🤝 Créditos do projeto

Desenvolvido por **Julia Gomes**. 👩‍💻

✉️ Para dúvidas ou sugestões, entre em contato: [rodriguesjuliaw23@gmail.com](mailto:rodriguesjuliaw23@gmail.com)

---

## 📄 Licença

Este projeto está sob a licença **MIT**.
