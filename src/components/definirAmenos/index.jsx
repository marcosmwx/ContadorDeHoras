export default function DefinirAmenos(props) {
  Date.prototype.addHours = function (valorHoraDef) {
    this.setHours(this.getHours() + valorHoraDef);
  };

  Date.prototype.addMinutes = function (valorMinDef) {
    this.setMinutes(this.getMinutes() + valorMinDef);
  };

  const data = new Date();

  data.addHours(-props.hora);
  data.addMinutes(-props.minutos);
  const horaDefinirAmenos = (`A essa hora e minutos atrás era: ${data.getHours().toString().padStart(2, "0")}:${data.getMinutes().toString().padStart(2, "0")}`)
  return (
    <div>
      <h3>
        {horaDefinirAmenos}
      </h3>
    </div>
  );
}
