import Input from "./Input";
import useInput from "../hooks/useInput.js";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

export default function Login() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError,
        handleReset: handleResetEmail,
    } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError,
        handleReset: handleResetPassword,
    } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

    function handleSubmit(event) {
        event.preventDefault();
        if (emailHasError || passwordHasError) return;
        handleResetPassword();
        handleResetEmail();
    }

    const resetAllInput = function () {
        handleResetPassword();
        handleResetEmail();
    };

    return (
        <form name="form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="EMAIL"
                    id="email"
                    type="email"
                    name="email"
                    isNotValid={emailHasError}
                    invalidMsg="Email is invalid"
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    value={emailValue}
                    required
                />
                <Input
                    label="PASSWORD"
                    id="password"
                    type="password"
                    name="password"
                    isNotValid={passwordHasError}
                    invalidMsg="Password is invalid"
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    value={passwordValue}
                    required
                />
            </div>

            <p className="form-actions">
                <button onClick={resetAllInput} className="button button-flat">
                    Reset
                </button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
