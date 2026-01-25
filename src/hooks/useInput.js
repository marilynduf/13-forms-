import { useState } from "react";
export default function useInput(initialValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(initialValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    const handleInputBlur = function () {
        setDidEdit(true);
    };

    const handleReset = function () {
        setEnteredValue(initialValue);
        setDidEdit(false);
    };

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }
    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid,
        handleReset,
    };
}
