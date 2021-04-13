import { useEffect, useState } from "react";

function Head() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour > 6 && hour < 12) {
      setTime("בוקר טוב!");
    } else if (hour >= 12 && hour < 20) {
      setTime("צהריים טובים!");
    } else {
      setTime("לילה טוב!");
    }
  }, []);

  return (
    <div className="head">
      <header>הוצאות החודש</header>
      <h2>{time}</h2>
    </div>
  );
}

export default Head;
