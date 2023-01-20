import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = (event) => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World</h2>
      {!changedText ? <Output>It's good to see you</Output> : null}
      {changedText ? <Output>Changed</Output> : null}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
