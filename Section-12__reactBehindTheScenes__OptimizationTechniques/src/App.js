import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button'

function App() {

  const [showParagraph, setShowparagraph] = useState(false)

  const onclickHandler = () => {
    setShowparagraph((prevShowParagraph) => 
      !prevShowParagraph
    )
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {
        showParagraph && <p>This is new !!</p>
      }
      <Button onClick={onclickHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
