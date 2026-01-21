import { useState } from "react";

export default function Login() {
    const initialValues = {
        email: "",
        password: "",
    };
    const [enteredValues, setEnteredValues] = useState(initialValues);
    const emailIsIvalid =
        enteredValues.email !== "" && !enteredValues.email.includes("@");

    const [emailInputLostFocus, setEmailInputLostFocus] = useState(false);

    const handleReset = function () {
        setEnteredValues(initialValues);
        setEmailInputLostFocus(false);
    };

    const handleOnBlur = function () {
        setEmailInputLostFocus(true);
    };
    const handleOnFocus = function () {
        setEmailInputLostFocus(false);
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(enteredValues);
    }

    function handleChange(event, property) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [property]: event.target.value,
        }));
    }

    return (
        <form name="form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={enteredValues.email}
                        onChange={(event) => handleChange(event, "email")}
                        onBlur={handleOnBlur}
                        onFocus={handleOnFocus}
                    />
                     
                    {emailIsIvalid && emailInputLostFocus && (
                        <div className="control-error">Email is invalid</div>
                    )}
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(event) => handleChange(event, "password")}
                        value={enteredValues.password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button onClick={handleReset} className="button button-flat">
                    Reset
                </button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
