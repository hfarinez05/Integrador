const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    try {
      const { url } = req;
      if (url.includes("/rickandmorty/character")) {
        const id = url.split("/").at(-1);
        const character = data.find((char) => char.id == id);
        if (character) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(character));
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "character no found" }));
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  })
  .listen(3001, "localhost");
