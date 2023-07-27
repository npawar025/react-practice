import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-one" }, [
    React.createElement("h1", {}, "This is the h1"),
    React.createElement("h2", {}, "This is the h2"),
  ]),
  React.createElement("div", { id: "child-two" }, [
    React.createElement("h1", {}, "This is the h1"),
    React.createElement("h2", {}, "This is the h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
