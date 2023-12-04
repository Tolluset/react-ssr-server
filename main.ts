import { createElement } from "react";
import { hydrateRoot } from "react-dom/client";

import App from "./App";

(function main() {
  const root = document.getElementById("root") as HTMLElement;
  const app = createElement(App);
  hydrateRoot(root, app);
})();
