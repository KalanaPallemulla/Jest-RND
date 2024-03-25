import React, { useState } from "react";
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
const FactorialComponent = () => {
  const [number, setNumber] = useState("");
  const [factorialResult, setFactorialResult] = useState(null);

  const calculateFactorial = () => {
    try {
      const result = factorial(parseInt(number));
      setFactorialResult(result);
    } catch (error) {
      setFactorialResult(null);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        data-testid="input-number" // Corrected prop name here
        placeholder="Enter a number"
      />
      <button onClick={calculateFactorial}>Calculate Factorial</button>
      {factorialResult !== null && (
        <p data-testid="factorial-result">
          Factorial of {number} is {factorialResult}
        </p>
      )}
    </div>
  );
};

export default FactorialComponent;
