import React, { useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
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
      <DemoOutput show={showParagraph}/>
      <Button onClick={onclickHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
