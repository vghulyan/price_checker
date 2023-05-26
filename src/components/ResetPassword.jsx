import React, { useState } from "react";

const ResetPassword = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = () => {
    // Logic to handle password reset
    console.log("Reset password for email:", email);
    // Reset the email state value
    setEmail("");
    // Close the modal
    onClose();
  };

  return (
    <div className="reset-password-modal">
      <div className="reset-password-container">
        <h2>Reset Password</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default ResetPassword;
