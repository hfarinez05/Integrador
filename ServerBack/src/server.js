const http = require("http");
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    try {
      const { url } = req;
      if (url.includes("/rickandmorty/character/")) {
        const id = url.split("/").at(-1);
        debugger;
        getCharById(res, id);
      }
    } catch (error) {
      throw new Error(error);
    }
  })
  .listen(3001, "localhost");
