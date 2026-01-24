import { useState } from "react";

const initialValues = {
    email: {
        content: "",
        isFocus: false,
    },
    password: {
        content: "",
        isFocus: false,
    },
};

export default function Login() {
    const [enteredValues, setEnteredValues] = useState(initialValues);

    const emailIsIvalid =
        enteredValues.email.content !== "" &&
        !enteredValues.email.content.includes("@");

    const handleReset = function () {
        setEnteredValues(initialValues);
    };

    const handleOnBlur = function (identifier) {
        setEnteredValues((prevState) => ({
            ...prevState,
            [identifier]: {
                ...prevState[identifier],
                isFocus: false,
            },
        }));
    };

    function handleChange(event, property) {
        setEnteredValues((prevState) => ({
            ...prevState,
            [property]: {
                ...prevState[property],
                content: event.target.value,
            },
        }));
    }

    const handleOnFocus = function (property) {
        setEnteredValues((prevState) => ({
            ...prevState,
            [property]: {
                ...prevState[property],
                isFocus: true,
            },
        }));
    };

    function handleSubmit(event) {
        event.preventDefault();
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
                        onChange={(event) => handleChange(event, "email")}
                        onBlur={() => handleOnBlur("email")}
                        onFocus={() => handleOnFocus("email")}
                        value={enteredValues.email.content}
                    />
                     
                    {emailIsIvalid && !enteredValues.email.isFocus && (
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
                        onBlur={() => handleOnBlur("password")}
                        value={enteredValues.password.content}
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
