const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todos_os_imobiliaria": "/imobiliaria",
  "/adicionar_imobiliaria": "/imobiliaria",
  "/editar_imobiliaria/:id": "/imobiliaria/:id",
  "/deletar_imobiliaria/:id": "/imobiliaria/:id"

}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
