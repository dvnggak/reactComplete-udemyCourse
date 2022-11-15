import { useState } from "react"

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueisValid = validateValue(enteredValue)
    const hasError = !valueisValid && isTouched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    };
    const inputBlurHandler = (event) => {
        setIsTouched(true)
    }

    return {
        value: enteredValue,
        hasError,
        valueChangeHandler,
        inputBlurHandler
    }
}

export default useInput