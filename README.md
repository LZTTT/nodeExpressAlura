# Coisas que aprendi no curso.

### Resumo dos Módulos
#### Módulo 1
- O que são APIs, seus diferentes tipos, para que são utilizadas e como vai funcionar a API no contexto do nosso produto.
- O que são servidores e como criar um servidor local utilizando o módulo http nativo do Node.js.
- Como criar rotas em uma API, como se conectar e acessar rotas e de que forma as rotas são utilizadas dentro da lógica de uma API REST.
#### Módulo 2
- Como instalar e utilizar os métodos do framework Express para criação de um servidor HTTP e também para gerenciamento de requisições, respostas e criação de rotas;
- Como implementar um CRUD inicial com os métodos HTTP GET, POST, PUT e DELETE, e como utilizar os métodos do Express para cada método;
- Como testar requisições com Postman e quais são as partes de uma requisição HTTP;
- Como utilizar o Express para gerar e enviar respostas adequadas para cada tipo de requisição HTTP.
## Sobre portas
- 5432 é usada para conexão com serviços do banco de dados PostgreSQL.

- 3306/3307 são usadas em conexões com o banco MySQL.

- 587 utilizada para conexões SMTP (Simple Mail Transfer Protocol, o protocolo de envio e recebimento de e-mails).

- 80 é a porta padrão de conexões HTTP, usada pelos navegadores.

### Guia 
#### Módulo 1 

- Importe o módulo http.
- Defina uma constante PORT com o valor 3000.
- Crie um servidor HTTP utilizando a função createServer.
- Dentro da função de callback de createServer, defina as variáveis req e res.
- Escreva o cabeçalho da resposta utilizando o método writeHead de res. O status deve ser 200 e o tipo de conteúdo deve ser text/plain.
- Termine a resposta utilizando o método end de res. O conteúdo deve ser "Curso de Node.js".
- No final do arquivo, chame o método listen de server passando a constante PORT como argumento e uma função de callback que imprime servidor escutando! no console.

#### Módulo 2

- Adicione uma nova função chamada buscaLivro com um parâmetro chamado id;
- Dentro da função buscaLivro, utilize o método findIndex para encontrar o índice do livro que possui o mesmo ID passado como parâmetro;
- Retorne o resultado encontrado pelo método findIndex dentro da função buscaLivro.

```
function buscaLivro(id) {
 return livros.findIndex(livro => {
   return livro.id === Number(id);
 })
}
```

- Adicione uma nova rota com o método GET e o caminho /livros/:id;
- Dentro da função de callback da rota /livros/:id, chame a função buscaLivro passando o valor do parâmetro id como argumento;
- Envie uma resposta com o status 200 e o conteúdo em formato JSON do livro encontrado no array livros usando o índice retornado pela função buscaLivro.

```
app.get("/livros/:id", (req, res) => {
 const index = buscaLivro(req.params.id);
 res.status(200).json(livros[index]);
});
```

- Adicione uma nova rota com o método POST e o caminho /livros;
- Dentro da função de callback da rota /livros, adicione o corpo da requisição (livro) ao array livros com o método push;
- Envie uma resposta com o status 201 e o conteúdo "livro cadastrado com sucesso".

```
app.post("/livros", (req, res) => {
 livros.push(req.body);
 res.status(201).send("livro cadastrado com sucesso");
});
```

- Adicione uma nova rota com o método PUT e o caminho /livros/:id;
- Dentro da função de callback da rota /livros/:id, chame a função buscaLivro passando o valor do parâmetro id como argumento;
- Atualize o título do livro encontrado usando o corpo da requisição (req.body.titulo);
- Envie uma resposta com o status 200 e o conteúdo em formato JSON do array livros atualizado.

```
app.put("/livros/:id", (req, res) => {
 const index = buscaLivro(req.params.id);
 livros[index].titulo = req.body.titulo;
 res.status(200).json(livros);
})
```