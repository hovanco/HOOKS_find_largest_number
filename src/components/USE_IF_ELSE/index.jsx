import React, { useState } from "react";

function USE_IF_ELSE() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    console.log("Number1", typeof num1);
    console.log("Number2", num2);
    console.log("Number3", num3);
    event.preventDefault();

    // use else if
    if (num1 >= num2 && num1 >= num3) {
      setResult(num1);
    } else if (num2 >= num1 && num2 >= num3) {
      setResult(num2);
    } else {
      setResult(num3);
    }
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setNum3("");
    setResult("");
  };

  return (
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      style={{ marginLeft: "20%", marginTop: "5%" }}
    >
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">
            Find number largest of three number - solution 3
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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

            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
                <label>Result</label>
                <input
                  type="text"
                  className="form-control"
                  id
                  placeholder="Largest number"
                  value={result}
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

export default USE_IF_ELSE;
