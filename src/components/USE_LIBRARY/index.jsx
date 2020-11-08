import React, { useState } from "react";

function Algorithm() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  const [largest, setLargest] = useState("");

  const handleSubmit = (event) => {
    console.log("Number1", typeof num1);
    console.log("Number2", num2);
    console.log("Number3", num3);
    event.preventDefault();

    // c4
    let largest = Math.max(num1, num2, num3);
    setLargest(largest);
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setNum3("");
    setLargest("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <legend>Find the largest number - use library</legend>
        <div className="form-group">
          <label>Number1</label>
          <input
            type="number"
            className="form-control"
            id
            name="num1"
            value={num1}
            onChange={(e) => setNum1(+e.target.value)} // convert string-number to number
            placeholder="Enter number1"
          />
        </div>
        <div className="form-group">
          <label>Number2</label>
          <input
            type="number"
            className="form-control"
            id
            value={num2}
            name="num2"
            onChange={(e) => setNum2(+e.target.value)}
            placeholder="Enter number2"
          />
        </div>
        <div className="form-group">
          <label>Number3</label>
          <input
            type="number"
            className="form-control"
            id
            name="num3"
            value={num3}
            onChange={(e) => setNum3(+e.target.value)}
            placeholder="Enter number3"
          />
        </div>
        <div className="form-group">
          <label>Result</label>
          <input
            type="text"
            className="form-control"
            id
            placeholder="Largest number"
            value={largest}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button onClick={handleReset} className="btn btn-danger">
          Reset
        </button>
      </form>
    </div>
  );
}

export default Algorithm;
