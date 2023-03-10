import { useState } from "react";
import Definir from "../definir";
import DefinirAmenos from "../definirAmenos";
export default Horario;

function Horario() {
  const [hora, setHora] = useState("");
  const [minutos, setMinutos] = useState("");

  return (
    <div>
      <h3>Defina a Hora</h3>
      <form action="#">
        <input
          type={"number"}
          min="00"
          max="24"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          placeholder="Horas"
        ></input>
        :
        <input
          type={"number"}
          min="00"
          max="60"
          value={minutos}
          onChange={(e) => setMinutos(e.target.value)}
          placeholder="Minutos"
        ></input>
        <Definir hora={hora} minutos={minutos} />
        <DefinirAmenos hora={hora} minutos={minutos} />
      </form>
    </div>
  );
}
