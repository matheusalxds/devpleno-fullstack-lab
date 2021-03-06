const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const categorias = require('./routes/categorias');
const publicacoes = require('./routes/publicacoes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());

/*
* Ambos os modos estão corretos, porém o método de baixo
*  é mais limpo
*  const resolver = (request, response) => {
*    response.send('olá mundo')
*  };
*  app.get('/', resolver);
* */

/*
* send => utilizado para enviar dados
* render => utilizado para informar qual página será renderizada
*
* nesse caso como vamos utilizar uma view engine, que seria ejs,
* a view engine, pressupôe que exista um diretório chamado
* views
* */

app.get('/', async (request, response) => {
 /*
 * Removido essa parte, pois é uma partida da primeira aula, não será mais necessário
 *
 * const content = await axios.get('https://como-fazer-devpleno-mathe.firebaseio.com/teste.json');
 * response.render('index', { i: content.data });
 * */

  response.render('index');
});

// Adicionado as rotas de categorias
app.use('/categorias', categorias);
// Adicionado as rotas de publicacoes
app.use('/publicacoes', publicacoes);

app.listen(PORT, (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log('Running on port: ' + PORT)
  }
});
