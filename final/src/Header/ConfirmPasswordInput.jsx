import { useRef, useState } from "react";

function ConfirmPasswordInput({ classNamePrefix, onConfirmPasswordChange, password }) {
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const errorRef = useRef(null);
  const classNameLabel = `${classNamePrefix}-label`;
  const classNameInfo = `${classNamePrefix}-info`;
  const classNameValue = `${classNamePrefix}-value`;
  const classNameError = `${classNamePrefix}-error`;

  const handleChange = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPasswordValue(confirmPasswordInput);

    if (confirmPasswordInput !== password) {
      setError("The confirm password does not match the password.");
    } else {
      setError("");
    }

    if (onConfirmPasswordChange) {
      onConfirmPasswordChange(confirmPasswordInput);
    }

  };

  return (
    <label className={classNameLabel}>
      <span className={classNameInfo}>Confirm Password:</span>
      <input
        ref={inputRef}
        onChange={handleChange}
        className={classNameValue}
        value={confirmPasswordValue}
        type="password"
      />
      <span ref={errorRef} className={classNameError}>
        {error}
      </span>
    </label>
  );
}

export default ConfirmPasswordInput;
