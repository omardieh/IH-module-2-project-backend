require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(morgan("dev"));
server.use(middlewares);
server.use(router);
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const PORT = process.env.PORT;
server.listen(PORT, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`JSON Server is running at port ${PORT}`);
});
