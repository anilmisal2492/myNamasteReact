const heading = React.createElement("div", {}, [
  React.createElement("h1", { id: "heading" }, "Hello from React child 1"),
  React.createElement("h2", { id: "heading" }, "Hello from React child 2"),React.createElement("div", {}, [
    React.createElement("h1", { id: "heading" }, "Hello from React child 1"),
    React.createElement("h2", { id: "heading" }, "Hello from React child 2"),
  ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
