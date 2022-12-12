import { useRef, useState } from "react";

function UsernameInput({classNamePrefix, onUsernameChange}) {
    const [usernameValue, setUsernameValue] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef(null);
    const errorRef = useRef(null);
    const classNameLabel = `${classNamePrefix}-label`;
    const classNameInfo = `${classNamePrefix}-info`;
    const classNameValue = `${classNamePrefix}-value`;
    const classNameError = `${classNamePrefix}-error`;
    
    const handleChange = (e) => {
        const usernameInput = e.target.value;
        setUsernameValue(usernameInput);

        if (usernameInput.length < 6) {
            setError("The username should have more than 6 characters");
        } else {
            setError("");
        }

        if (onUsernameChange) {
            onUsernameChange(usernameInput);
        }
    }
    return (
        <label className={classNameLabel}>
            <span className={classNameInfo}>Username:</span>
            <input
                ref={inputRef}
                onChange={handleChange}
                className={classNameValue}
                value={usernameValue}
            />
            <span
                ref={errorRef}
                className={classNameError}>
                {error}
            </span>
        </label>
    );
}
export default UsernameInput;
