import { createElement } from "react";
import { hydrate } from "react-dom";

import App from "./App";

(function main() {
  const app = createElement(App);
  hydrate(app, document.body);
})();
