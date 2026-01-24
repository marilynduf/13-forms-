import { useRef, useState } from "react";

export default function Login(event) {
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);

    const email = useRef("");
    const password = useRef("");

    const handleReset = function () {
        email.current.value = "";
        password.current.value = "";
    };

    function handleSubmit(event) {
        event.preventDefault();
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailIsVAlid =
            email.current.value !== "" && emailPattern.test(enteredEmail);

        if (!emailIsVAlid) {
            setEmailIsInvalid(true);
            return;
        }
        setEmailIsInvalid(false);

        console.log("Sending HTTP request...");
        event.target.reset();
    }

    return (
        <form name="form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input ref={email} id="email" type="email" name="email" />
                    {emailIsInvalid && (
                        <div className="control-error">Email is invalid</div>
                    )}
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        ref={password}
                        id="password"
                        type="password"
                        name="password"
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
