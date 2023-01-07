import { useEffect, useState } from "react";

function Contador() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    setInterval(() => {
      const data = new Date();
      const horas = data.getHours().toString().padStart(2, "0");
      const minutos = data.getMinutes().toString().padStart(2, "0");
      const segundos = data.getSeconds().toString().padStart(2, "0");

      setHora(`Horário de Brasília:  ${horas}:${minutos}:${segundos}`);
    }, 1000);
  });
  return (
    <div>
      <h2> {hora} </h2>
    </div>
  );
}

export default Contador;
