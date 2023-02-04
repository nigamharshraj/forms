



import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input1, input2, input3, input4, input5);
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">Projects</h1>
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
          placeholder="Owner"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />

<input
          className="form-input"
          type="text"
          placeholder="Member count"
          value={input2}
          onChange={(e) => setInput3(e.target.value)}
        />


<label className="form-label">Project Start Date:</label>
<input
      className="form-input form-date"
      id="exampleDate"
      name="date"
    
      placeholder="date placeholder"
      type="date"
      onChange={(e) => setInput4(e.target.value)}
    />

<input
          className="form-input"
          type="text"
          placeholder="Stake holder"
          value={input2}
          onChange={(e) => setInput5(e.target.value)}
        />


        <button className="form-button" type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default Form;
