


import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input1, input2);
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">Policy Documents</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Title"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="URL"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button className="form-button" type="submit">Add Policy Document</button>
      </form>
    </div>
  );
}

export default Form;
