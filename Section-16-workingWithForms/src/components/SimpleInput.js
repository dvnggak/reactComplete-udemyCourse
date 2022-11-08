import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {

  const nameInputRef = useRef()

  const [enteredName, setEnteredName] = useState('')
  const [nameIsValid, setNameIsValid] = useState(true)
  const [nameIsTouched, setNameIsTouched] = useState(false)

  useEffect(() => {
    if(nameIsValid) {
      console.log('Name Input is Valid !!')
    }
  }, [nameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true)
    if (enteredName.trim() === "" ) {
      setNameIsValid(false)
      return;
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameIsTouched(true)

    if (enteredName.trim() === "" ) {
      setNameIsValid(false)
      return;
    }
    setNameIsValid(true)

    console.log(enteredName)
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName('')
  };

  const nameInputIsInvalid = !nameIsValid && nameIsTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
