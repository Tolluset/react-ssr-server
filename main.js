export default function main() {
  if (globalThis.window) {
    const app = React.createElement(App);
    ReactDOM.hydrate(app, document.body);
  }
}

export function App() {
  if (globalThis.window) {
    const [count, setCount] = React.useState(1);

    const addCount = () => {
      setCount((prv) => prv + 1);
    };

    return React.createElement(
      React.Fragment,
      {},
      React.createElement("div", {}, "Hello react SSR!"),
      React.createElement(
        "button",
        { onClick: addCount },
        `Like it ${count} times! `,
      ),
    );
  }
}

main();
