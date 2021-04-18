import React from "react";

function Purchase({ purchase, setCurrentCal, setCurrentBank }) {
  
  return (
    <div className="purchase">
      <p>{purchase.amountSpend}</p> <p className = "expense-for">{purchase.usedFor}</p>
      <p>{purchase.cardUsed}</p>
    </div>
  );
}

export default Purchase;
