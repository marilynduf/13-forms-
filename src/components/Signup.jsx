import { useState } from "react";
import {
    isEmail,
    isNotEmpty,
    hasMinLength,
    isEqualsToOtherValue,
} from "../util/validation";
import { useActionState } from "react";

export default function Signup() {
    function signupAction(prevFormState, formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password");
        const firstName = formData.get("first-name");
        const lastName = formData.get("last-name");
        const role = formData.get("role");
        const terms = formData.get("terms");
        const acquisitionChannel = formData.getAll("acquisition");

        let errors = [];

        if (!isEmail(email)) {
            errors.push("Email invalid");
        }
        if (!isNotEmpty(password) || !hasMinLength(password, 4)) {
            errors.push("Password invalid (at leat 4 characters)");
        }
        if (!isEqualsToOtherValue(password, confirmPassword)) {
            errors.push("Passwords do not match");
        }
        if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
            errors.push("Must provide first name and last name");
        }
        if (!isNotEmpty(role)) {
            errors.push("Must select a role");
        }
        if (!terms) {
            errors.push("Must check terms");
        }
        if (acquisitionChannel.length === 0) {
            errors.push("Select at leat one acquisition");
        }

        if (errors.length > 0) {
            return {
                errors,
                enteredValues: {
                    email,
                    password,
                    confirmPassword,
                    firstName,
                    lastName,
                    role,
                    acquisitionChannel,
                    terms,
                },
            };
        }
        return { errors: null };
    }

    const [formState, formAction] = useActionState(signupAction, {
        errors: null,
    });

    return (
        <>
            <form action={formAction}>
                <h2>Welcome on board!</h2>
                <p>
                    We just need a little bit of data from you to get you
                    started 🚀
                </p>
                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        defaultValue={formState.enteredValues?.email}
                    />
                </div>
                {/* PASSWORD */}
                <div className="control-row">
                    <div className="control">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            minLength={4}
                            defaultValue={formState.enteredValues?.password}
                        />
                    </div>
                    {/* CONFIRM PASSWORD */}
                    <div className="control">
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            name="confirm-password"
                            defaultValue={
                                formState.enteredValues?.confirmPassword
                            }
                        />
                    </div>
                </div>
                <hr />
                <div className="control-row">
                    <div className="control">
                        <label htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            defaultValue={formState.enteredValues?.firstName}
                        />
                    </div>

                    <div className="control">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            defaultValue={formState.enteredValues?.lastName}
                        />
                    </div>
                </div>
                <div className="control">
                    <label htmlFor="phone">
                        What best describes your role?
                    </label>
                    <select id="role" name="role">
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="employee">Employee</option>
                        <option value="founder">Founder</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <fieldset>
                    <legend>How did you find us?</legend>
                    <div className="control">
                        <input
                            type="checkbox"
                            id="google"
                            name="acquisition"
                            value="google"
                            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
                                "google",
                            )}
                        />
                        <label htmlFor="google">Google</label>
                    </div>

                    <div className="control">
                        <input
                            type="checkbox"
                            id="friend"
                            name="acquisition"
                            value="friend"
                            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
                                "friend",
                            )}
                        />
                        <label htmlFor="friend">Referred by friend</label>
                    </div>

                    <div className="control">
                        <input
                            type="checkbox"
                            id="other"
                            name="acquisition"
                            value="other"
                            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
                                "other",
                            )}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </fieldset>
                <div className="control">
                    <label htmlFor="terms-and-conditions">
                        <input
                            type="checkbox"
                            id="terms-and-conditions"
                            name="terms"
                            defaultChecked={formState.enteredValues?.terms}
                        />
                        I agree to the terms and conditions
                    </label>
                </div>
                <p className="form-actions">
                    <button type="reset" className="button button-flat">
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Sign up
                    </button>
                </p>

                {formState.errors && (
                    <ul className="error">
                        {formState.errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
            </form>
        </>
    );
}
