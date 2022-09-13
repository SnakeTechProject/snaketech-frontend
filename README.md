# snaketech-frontend

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Observações:

Caso prefira ler direto pelo vscode, podera instalar a extensão de markdown preview
Inicie a abertura rápida do VS Code: `CTRL+P`
E execute este código: `ext install shd101wyy.markdown-preview-enhanced`
e utilizar o comando `ctrl+k e v` neste arquivo

## Instalar e rodar o projeto

Rodar o SnakeTech em sua máquina local é uma tarefa extremamente simples.

Observações:
Atualmente o readme está adaptado para os dev's, quando entrar em produção não terá tantos detalhes

### Dependências globais

Você precisa ter uma dependências instaladas:

- Node.js LTS v16 (Versões superiores pode dar conflito com o yarn, utilize as versões passadas abaixo (nvm) para padronizar nosso desenvolvimento)

Utiliza `nvm`? (Node Version Manager) Então pode executar `nvm install v16.17.0` na pasta do projeto para instalar e utilizar a versão mais apropriada do Node.js.

<br>

Execute no terminal `nvm use v16.17.0` para utilizar o node v16 com todas dependencias inclusas dentro do pacote node: (testar versoes unicas caso você prefira)
`yarn -v` retornara `yarn v1.22 1.22.19`
`node -v ` retornara `v16.17.0`
`npm -v` retornara `8.15.0`

Para usuarios do windows utilize a extensão editor config
Inicie a abertura rápida do VS Code `CTRL+P`
E execute este codigo `ext install EditorConfig.EditorConfig` (CASO nao instale podera pesquisar editor-config nas extensoes do vscode)

### Dependências locais

Então após baixar o repositório, não se esqueça de instalar as dependências locais do projeto:

```bash
yarn
```

### Rodar o projeto

Para rodar o projeto localmente, basta rodar o comando abaixo:

```bash
yarn dev
```

Observações:

-Quando abrir o vscode do projeto, utilize o nvm citado acima pra padronizar todas ferramentas, relembrando: `nvm use v16.17.0`

- Para derrubar todos os serviços, basta utilizar as teclas `CTRL+C`, que é o padrão dos terminais para matar processos.

## Commit das alterações

Necessita de revisão sobre a padronização de commit's e comandos de cobrança / não testei essa parte!

Após finalizar suas alterações e se certificar que todos os testes estão passando com o comando geral `prepare`, chegou a hora de fazer o commit das suas alterações.

Para ser auxiliado no padrão de commit que utilizamos, rode o comando abaixo e siga as instruções:

```bash
yarn pre-commit
```


