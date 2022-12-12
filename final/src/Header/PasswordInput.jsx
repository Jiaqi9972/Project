import { useRef, useState } from "react";

function PasswordInput({classNamePrefix, onPasswordChange}) {
    const [passwordValue, setPasswordValue] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef(null);
    const errorRef = useRef(null);
    const classNameLabel = `${classNamePrefix}-label`;
    const classNameInfo = `${classNamePrefix}-info`;
    const classNameValue = `${classNamePrefix}-value`;
    const classNameError = `${classNamePrefix}-error`;

    const handleChange = (e) => {
        const passwordInput = e.target.value;
        setPasswordValue(passwordInput);

        if (passwordInput.length < 8) {
            setError("Password should be longer than 8 characters");
        } else {
            setError("");
        }

        if (onPasswordChange) {
            onPasswordChange(passwordInput);
        }
    };

    return (
        <label className={classNameLabel}>
            <span className={classNameInfo}>Password:</span>
            <input
                ref={inputRef}
                onChange={handleChange}
                className={classNameValue}
                value={passwordValue}
                type="password"
            />
            <span ref={errorRef} className={classNameError}>
                {error}
            </span>
        </label>
    );
}
export default PasswordInput;
