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

    const  resetValue = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueisValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        resetValue
    }
}

export default useInput