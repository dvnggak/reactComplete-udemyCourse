import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [nameIsTouched, setNameIsTouched] = useState(false)

  const nameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched

  let formIsValid = false

  if (nameIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameIsTouched(true)

    if (!nameIsValid) {
      return;
    }
    console.log(enteredName)

    setEnteredName('')
    setNameIsTouched(false)
  };


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
