(function main() {
  const app = React.createElement(App);
  ReactDOM.hydrate(app, document.body);
})();

export function App() {
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
