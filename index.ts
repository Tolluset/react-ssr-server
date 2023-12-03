import http from "node:http";

import { renderToString } from "react-dom/server";
import { createElement } from "react";

import App from "./App";

function handler(_req: http.IncomingMessage, res: http.ServerResponse) {
  const app = createElement(App);

  const html = renderToString(app);
  console.debug("🚀 : ssr-server.ts:5: html=", html);

  res.setHeader("Content-Type", "text/html");
  res.end(html);
}

function main() {
  http.createServer(handler).listen(3000);

  console.log("server started!");
}

main();
