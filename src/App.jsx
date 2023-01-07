import "./App.css";
import Contador from "./components/contador";
import Horario from "./components/formHorario";
import Relogio from "./components/relogio";

function App() {
  return (
    <div className="App">
      <div className="Cabecalho">
        <h1>Contador de Horas</h1>

        <Contador />
      </div>
      <div className="AmaisMenos">
        <div className="Horario">
          <Horario />
        </div>
        <div className="Relogio">
          <Relogio />
        </div>
      </div>

      <a className="github" href="https://github.com/marcosmwx">
        by: Marcos Willian
      </a>
    </div>
  );
}

export default App;
