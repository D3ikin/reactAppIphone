import React, { useState } from 'react';

const EmailForm = ({ onFormSubmit, onNumberChange }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    onNumberChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(phoneNumber);
  };

  return (
    <form onSubmit={handleSubmit} style={{width: "100%", height: "100%"}}>
      <input
        type="tel"
        name="phoneNumber"
        placeholder="+7 (000) 000-00-00"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </form>
  );
};

export default EmailForm;
