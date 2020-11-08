import React, { useState } from "react";

function USE_MAX() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  const [largest, setLargest] = useState("");

  const handleSubmit = (event) => {
    console.log("Number1", typeof num1);
    console.log("Number2", num2);
    console.log("Number3", num3);
    event.preventDefault();

    // c3
    let max = num1;

    if (max < num3) {
      max = num3;
    }
    if (max < num2) {
      max = num2;
    }
    setLargest(max);
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setNum3("");
    setLargest("");
  };

  return (
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Panel title</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <legend>Find the largest number</legend>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Largest</label>
                <input
                  type="text"
                  className="form-control"
                  id
                  placeholder="Largest number"
                  value={largest}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default USE_MAX;
