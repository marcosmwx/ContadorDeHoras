
export default function Definir(props) {
  
  Date.prototype.addHours = function (valorHoraDef) {
    this.setHours(this.getHours() + valorHoraDef);
  };

  Date.prototype.addMinutes = function (valorMinDef) {
    this.setMinutes(this.getMinutes() + valorMinDef);
  };

  const data = new Date();
  

    data.addHours(+props.hora);
    data.addMinutes(+props.minutos);
   
  return (
    <div>
      <h5>Hora a mais  
        : {data.getHours().toString().padStart(2, "0")}:
        {data.getMinutes().toString().padStart(2, "0")}:
        {data.getSeconds().toString().padStart(2, "0")}
      </h5>

    </div>
  );
}
