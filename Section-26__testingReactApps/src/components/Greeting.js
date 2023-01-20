import React, { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = (event) => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World</h2>
      {!changedText ? <p>It's good to see you</p> : null}
      {changedText ? <p>Changed</p> : null}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
