import { useRef } from "react";

export default function Login(event) {
    const email = useRef("");
    const password = useRef("");

    const handleReset = function () {
        email.current.value = "";
        password.current.value = "";
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email.current.value, password.current.value);
    }

    return (
        <form name="form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input ref={email} id="email" type="email" name="email" />
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
