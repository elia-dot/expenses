import React from "react";

function Remains({ startCal, currentCal, startBank, currentBank }) {
  return (
    <div className="remains">
      <h3>הסכום שנשאר להוציא:</h3>
      <div className="details">
        <p>בכרטיס הבנק:</p> <p>{`${currentBank}/${startBank}`}</p>
      </div>
      <div className="progress">
        <div className="bar" style = {{height: '100%', width: `${(startBank-currentBank)/startBank*100}%`, background: 'lightblue'}}></div>{" "}
      </div>
      <div className="details">
        <p>בכרטיס Cal:</p> <p>{`${currentCal}/${startCal}`}</p>
      </div>
      <div className="progress">
        <div className="bar" style = {{height: '100%', width: `${(startCal-currentCal)/startCal*100}%`, background: 'lightblue'}}></div>{" "}
      </div>
    </div>
  );
}

export default Remains;
