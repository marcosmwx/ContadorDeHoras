import React, { useState } from "react";

export default function RelogioDefinirAMenos(props) {
  const datax = props.data;

  Date.prototype.subtractHours = function (valorHora) {
    this.setHours(this.getHours() - valorHora);
  };

  Date.prototype.subtractMinutes = function (valorMin) {
    this.setMinutes(this.getMinutes() - valorMin);
  };

  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);

  const datay = new Date(datax.getTime());
  datay.subtractMinutes(minutos);
  datay.subtractHours(horas);
  const horadeSair = `Voce de Sair de casa as ${datay
    .getHours()
    .toString()
    .padStart(2, "0")}:${datay.getMinutes().toString().padStart(2, "0")}`;
  return (
    <div>
      <h3>Qual é o tempo que voce leva até la?</h3>
      <form action="#">
        <input
          type={"number"}
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
          placeholder="Horas"
          style={{ width: "50px" }}
        ></input>
        :
        <input
          type={"number"}
          value={minutos}
          onChange={(e) => setMinutos(e.target.value)}
          placeholder="Minutos"
          style={{ width: "50px" }}
        ></input>
      </form>
      <h4>{horadeSair}</h4>
    </div>
  );
}
