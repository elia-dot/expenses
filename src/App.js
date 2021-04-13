import React, { useState } from "react";
import Form from "./components/Form";
import Head from "./components/Head";
import Remains from "./components/Remains";
import Sumarry from "./components/Sumarry";

function App() {
  const [startCal, setStartCal] = useState(6000);
  const [currentCal, setCurrentCal] = useState(6000);
  const [startBank, setStartBank] = useState(2500);
  const [currentBank, setCurrentBank] = useState(2500);
  const [card, setCard] = useState("cal");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [purchases, setPurchases] = useState([]);

  return (
    <>
      <Head />
      <Remains
        startCal={startCal}
        setStartCal={setStartCal}
        currentCal={currentCal}
        setCurrentCal={setCurrentCal}
        startBank={startBank}
        setStartBank={setStartBank}
        currentBank={currentBank}
        setCurrentBank={setCurrentBank}
      />
      <Form
        card={card}
        setCard={setCard}
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        purchases={purchases}
        setPurchases={setPurchases}
        setCurrentCal={setCurrentCal}
        setCurrentBank={setCurrentBank}
      />
      <Sumarry
        purchases={purchases}
        setCurrentCal={setCurrentCal}
        setCurrentBank={setCurrentBank}
      />
    </>
  );
}

export default App;
