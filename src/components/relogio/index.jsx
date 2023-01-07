import React, { useState } from "react";
import RelogioDefinirAMenos from "../relogiodefamenos/relogiodefiniramenos";
export default Relogio;

function Relogio() {
  const [hora, setHora] = useState();
  const [minuto, setMinuto] = useState();
  const [data, setData] = useState(new Date());

  function handleHora(e) {
    const value = e.target.value;
    if (value >= 0 && value <= 23) {
      setHora(value);
      setData(new Date(data.setHours(value)));
    }
  }

  function handleMinuto(e) {
    const value = e.target.value;
    if (value >= 0 && value <= 59) {
      setMinuto(value);
      setData(new Date(data.setMinutes(value)));
    }
  }

  return (
    <div>
      <h3>Que horas voce quer chegar?</h3>
      <form action="#">
        <input
          type={"number"}
          min="00"
          max="100"
          value={hora}
          placeholder="Horas"
          onChange={handleHora}
        ></input>
        :
        <input
          type={"number"}
          min="00"
          max="100"
          value={minuto}
          placeholder="Minutos"
          onChange={handleMinuto}
        ></input>
      </form>
      <RelogioDefinirAMenos data={data} />
    </div>
  );
}
