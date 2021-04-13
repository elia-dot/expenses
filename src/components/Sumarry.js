import React from "react";
import Purchase from "./Purchase";

function Sumarry({ purchases, setCurrentCal, setCurrentBank }) {
  return (
    <div className="summary">
      <div className="summary-head">
        <div className="amount"> סכום</div>
        <div className="expense"> עבור</div>
        <div className="card"> כרטיס</div>
      </div>
      <div className="summary-body">
        {purchases.map((purchase) => {
          return (
            <Purchase
              purchase={purchase}
              key={purchase.id}
              setCurrentCal={setCurrentCal}
              setCurrentBank={setCurrentBank}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sumarry;
