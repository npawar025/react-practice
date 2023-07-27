import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>This is react title component</h1>;
};

//React composition is nothing but nesting one component into the other component
const ReactComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>This is the react component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComponent />);
