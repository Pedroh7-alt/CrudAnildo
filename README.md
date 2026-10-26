# CrudAnildo

node -v
npx http-server
npx live-server



No terminal do VS Code, execute:

Bash
npm init -y
O -y aceita as configurações padrão de forma automática e gera o arquivo package.json na pasta do seu projeto.

Instalar a biblioteca do servidor
Instale o live-server como dependência de desenvolvimento (ele recarrega a página sozinho sempre que você salva uma alteração no código):

Bash
npm install --save-dev live-server
Editar o arquivo package.json
Abra o arquivo package.json criado na raiz do projeto e modifique o bloco "scripts".

Exemplo do package.json editado:

JSON
{
  "name": "crud-usuarios",
  "version": "1.0.0",
  "description": "CRUD básico usando HTML, CSS e JS puro",
  "main": "script.js",
  "scripts": {
    "start": "live-server"
  },
  "keywords": [],
  "author": "Seu Nome",
  "license": "ISC",
  "devDependencies": {
    "live-server": "^1.2.2"
  }
}
O que alterar exatamente:

"scripts": Substitua a linha "test": "..." por "start": "live-server". Isso cria um atalho de execução personalizado.

"name": Pode mudar para o nome da sua aplicação (utilize apenas letras minúsculas, números e hífens, sem espaços).

"author" e "description": Campos opcionais caso queira identificar quem fez o projeto e o objetivo dele.

Executar a aplicação
Rode o comando padrão do Node para iniciar o projeto:

Bash
npm start
O terminal executará o script mapeado e abrirá a página automaticamente no navegador.

Encerrar a execução
Pressione Ctrl + C no terminal e confirme com y para fechar o servidor quando terminar.

