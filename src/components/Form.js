import React from "react";

function Form({
  card,
  setCard,
  description,
  setDescription,
  amount,
  setAmount,
  purchases,
  setPurchases,
  setCurrentBank,
  setCurrentCal,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPurchases([
      ...purchases,
      {
        cardUsed: card,
        amountSpend: amount,
        usedFor: description,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    if (card === "cal") {
      setCurrentCal((prevState) => prevState - amount);
    } else {
      setCurrentBank((prevState) => prevState - amount);
    }
    setDescription("");
    setAmount("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>בחר/י כרטיס: </label>
      <select
        name="cardSelect"
        value={card}
        onChange={(e) => setCard(e.target.value)}
      >
        <option value="cal">cal</option>
        <option value="bank">בנק</option>
      </select>

      <label>
        {" "}
        עבור:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        {" "}
        סכום:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button className="send">שלח</button>
    </form>
  );
}

export default Form;
