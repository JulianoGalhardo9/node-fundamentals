# 🚀 API REST do Zero com Node.js — Fundamentos, Streams e Persistência de Dados

---

### 🧭 Visão Geral

O projeto **API REST do Zero com Node.js** é uma aplicação back-end desenvolvida do zero, com foco em **entendimento profundo do ecossistema Node.js**, **arquitetura de APIs RESTful** e **manipulação eficiente de dados e streams**.  

Durante o desenvolvimento, o sistema evolui progressivamente desde os conceitos mais fundamentais — como a criação do primeiro servidor — até tópicos avançados, como **implementação de middlewares**, **tratamento de rotas dinâmicas com RegEx**, **persistência de dados em arquivos JSON**, e **manipulação de fluxos de dados (Streams)** em nível de sistema.

Este projeto representa um **marco formativo** para desenvolvedores que desejam compreender a fundo **como o Node.js realmente funciona por baixo dos frameworks**, construindo uma base sólida para atuar em aplicações reais, escaláveis e de alta performance.

---

### ⚙️ Etapas do Desenvolvimento

#### 🧩 1. Criação do Projeto e Ambientação
- Configuração do primeiro projeto Node.js, explorando seu ecossistema e estrutura básica.  
- Execução dos primeiros scripts e comandos via terminal.  
- Compreensão de como o Node interpreta e executa código JavaScript fora do navegador.  

#### 🔁 2. Automação com Scripts e Flag `--watch`
- Utilização da flag `--watch` para **monitoramento automático de alterações no código** durante o desenvolvimento.  
- Criação de scripts personalizados no `package.json` para agilizar processos de execução e reinicialização do servidor.  

#### 🌐 3. Fundamentos de HTTP e Rotas
- Introdução aos conceitos de **requisições HTTP**, **métodos (GET, POST, PUT, DELETE)** e **respostas**.  
- Implementação das primeiras rotas de uma API RESTful sem o uso de frameworks.  
- Entendimento prático de como ocorre a comunicação entre cliente e servidor.  

#### 👥 4. Manipulação de Estado e Usuários em Memória
- Implementação do conceito de **stateful applications**, armazenando dados diretamente na memória.  
- Criação e listagem de usuários por meio de rotas específicas.  
- Introdução aos **cabeçalhos de requisição e resposta (Headers)**, definindo formato e conteúdo de dados trafegados.  

#### ⚡ 5. Streams no Node.js — Fundamentos e Aplicações
- Compreensão teórica e prática do conceito de **Streams**, recurso essencial do Node para trabalhar com grandes volumes de dados.  
- Diferença entre **Readable Streams**, **Writable Streams** e **Transform Streams**.  
- Correção conceitual sobre **taxas de transferência** (Megabits vs Megabytes).  

#### 🧠 6. Criando Streams de Leitura e Escrita
- Implementação de **Streams de leitura** usando `stdin` e `stdout` para demonstrar fluxo de dados em tempo real.  
- Criação de **Streams de escrita** e **Streams de transformação** para processar e modificar informações dinamicamente entre leitura e gravação.  

#### 🛰️ 7. Simulação de Requisições HTTP com Streams
- Utilização de **Streams** como corpo (`body`) de requisições HTTP, simulando o envio de dados grandes a partir do frontend.  
- Uso da API **Fetch** para consumir e processar streams dentro da aplicação Node.  

#### 🔄 8. Iterando Streams com `for await`
- Aplicação do `for await` para percorrer fluxos de dados de forma assíncrona e controlada.  
- Garantia de que o processamento ocorre apenas após o término da leitura completa da stream.  

#### 🧩 9. Trabalhando com JSON e Buffers
- Conversão e transmissão de dados em formato **JSON** através de Streams e Buffers.  
- Integração com ferramentas externas, como o **Insomnia**, para testar e validar as requisições.  
- Introdução prática aos **Buffers**, compreendendo seu papel fundamental na manipulação de dados binários.  

#### 🧱 10. Introdução a Middlewares
- Criação de um **middleware personalizado** para conversão automática de dados em JSON.  
- Compreensão do middleware como **interceptador de requisições**, responsável por modularizar e organizar o fluxo de execução do servidor.  

#### 💾 11. Persistência com Sistema de Arquivos (File System)
- Implementação de uma camada de persistência baseada em **arquivos JSON**, substituindo a dependência de bancos de dados externos.  
- Desenvolvimento de uma classe `Database` responsável por salvar e ler dados utilizando o módulo nativo **`fs` (File System)**.  

#### 🆔 12. Geração de Identificadores Únicos
- Utilização do módulo **`crypto`** e da função **`randomUUID()`** para criar identificadores universais únicos (UUIDs) para cada usuário.  

#### 🗂️ 13. Organização de Rotas e Modularização
- Separação das rotas em arquivos independentes, removendo condicionais complexas.  
- Refatoração para um sistema de roteamento mais limpo e escalável.  

#### 🧮 14. Manipulação Avançada de Rotas com RegEx
- Introdução à **expressões regulares (RegEx)** para identificação e tratamento de parâmetros dinâmicos em rotas.  
  - `/:([a-zA-Z]+)/g` → Identificação de parâmetros nomeados.  
  - `(?<$1>[a-z0-9\-_]+)` → Captura de valores correspondentes aos parâmetros.  
- Implementação de rotas **DELETE** e **PUT**, com recuperação de parâmetros via `req.params` e `req.body`.  

#### 🔍 15. Query Params e Filtros Dinâmicos
- Implementação de filtros na listagem de usuários utilizando **Query Parameters**.  
- RegEx aplicada:  
  ```regex
  (?<query>\?(.*))?$

---

### 🧰 Tecnologias e Recursos Utilizados

- Node.js (ES Modules)
- HTTP Core Module
- Streams (Readable, Writable, Transform)
- File System (fs/promises)
- Crypto (randomUUID)
- RegEx para rotas dinâmicas
- Fetch API
- Insomnia (para testes de requisições)

---

### 🧠 Conceitos-Chave Aprendidos
- Funcionamento interno de um servidor Node.js puro.
- Criação de uma API REST sem frameworks.
- Leitura e escrita de dados com Streams.
- Uso de Buffers e manipulação binária.
- Implementação de middlewares personalizados.
- Persistência de dados com o File System.
- Utilização de RegEx para rotas dinâmicas.
- Tratamento de query parameters e params.

---

### 🏁 Conclusão
- Este projeto é mais que um exercício técnico é uma imersão prática no coração do Node.js. A partir dele, foi possível dominar desde os fundamentos da plataforma até práticas avançadas de construção e arquitetura de APIs.
- Com este conhecimento, o desenvolvedor adquire autonomia para criar soluções performáticas, modulares e seguras, entendendo profundamente o que acontece “por baixo do capô” de frameworks populares como Express, Fastify ou NestJS.
