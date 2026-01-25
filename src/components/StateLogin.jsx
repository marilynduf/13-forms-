import { useState } from "react";
import Input from "./Input";

const initialValues = {
    email: {
        content: "",
        didEdit: false,
    },
    password: {
        content: "",
        didEdit: false,
    },
};

export default function Login() {
    const [enteredValues, setEnteredValues] = useState(initialValues);

    const emailIsInvalid =
        !enteredValues.email.content.includes("@") &&
        enteredValues.email.didEdit;

    const passwordIsInvalid =
        enteredValues.password.content !== "" &&
        enteredValues.password.didEdit &&
        enteredValues.password.content.length.trim() < 8;

    const handleReset = function () {
        setEnteredValues(initialValues);
    };

    const handleOnBlur = function (identifier) {
        setEnteredValues((prevState) => ({
            ...prevState,
            [identifier]: {
                ...prevState[identifier],
                didEdit: true,
            },
        }));
    };

    function handleChange(event, property) {
        setEnteredValues((prevState) => ({
            ...prevState,
            [property]: {
                didEdit: false,
                content: event.target.value,
            },
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (emailIsInvalid || enteredValues.email.content === "") {
            console.log("email invalid");
            return;
        }
        setEnteredValues(initialValues);
        console.log("sending HTTP request...");
    }

    return (
        <form name="form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="EMAIL"
                    id="email"
                    type="email"
                    name="email"
                    isNotValid={emailIsInvalid}
                    invalidMsg="Email is invalid"
                    onChange={(event) => handleChange(event, "email")}
                    onBlur={() => handleOnBlur("email")}
                    value={enteredValues.email.content}
                />
                <Input
                    label="PASSWORD"
                    id="password"
                    type="password"
                    name="password"
                    isNotValid={passwordIsInvalid}
                    invalidMsg="Password is invalid"
                    onChange={(event) => handleChange(event, "password")}
                    onBlur={() => handleOnBlur("password")}
                    value={enteredValues.password.content}
                />
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
