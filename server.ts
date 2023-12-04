import http from "node:http";
import fs from "node:fs";

import { renderToString } from "react-dom/server";
import { createElement } from "react";

import App from "./App";

function handler(req: http.IncomingMessage, res: http.ServerResponse) {
  const { url } = req;

  if (url === "/") {
    const app = createElement(App);
    const renderedString = renderToString(app);

    const indexHtml = fs.readFileSync("index.html", "utf8");
    const result = indexHtml.replace("__placeholder__", renderedString);

    res.setHeader("Content-Type", "text/html");
    res.end(result);
    return;
  }

  if (url === "/main.js") {
    const main = fs.readFileSync("dist/main.js", "utf8");

    res.setHeader("Content-Type", "application/javascript");
    res.end(main);
    return;
  }

  res.end();
  return;
}

(function server() {
  http.createServer(handler).listen(3000, () => {
    console.log("server started!");
  });
})();
