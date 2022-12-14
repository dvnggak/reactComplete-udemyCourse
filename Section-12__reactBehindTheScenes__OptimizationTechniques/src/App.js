import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button'

function App() {

  const [showParagraph, setShowparagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  const onclickHandler = useCallback(() => {
    if (allowToggle) {
      setShowparagraph((prevShowParagraph) => 
        !prevShowParagraph
      )
    }
  },[allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={onclickHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
