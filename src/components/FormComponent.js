import React, { useState } from "react";

const FormComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [input1, setInput1] = useState("");
  const [input1Error, setInput1Error] = useState("");
  const [input2, setInput2] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
    if (!event.target.value) {
      setInput1Error("Input 1 is required");
    } else {
      setInput1Error("");
    }
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input1) {
      setInput1Error("Input 1 is required");
      return;
    }
    // Handle form submission here
    console.log("Form submitted with selected option:", selectedOption);
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">--Please choose an option--</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <br />
      <label>
        Input 1:
        <input type="text" value={input1} onChange={handleInput1Change} />
      </label>
      {input1Error && <div>{input1Error}</div>}
      <br />
      {selectedOption === "option2" && (
        <label>
          Input 2:
          <input type="text" value={input2} onChange={handleInput2Change} />
        </label>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
