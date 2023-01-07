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

        <div className="AmaisMenos">
          <div className="Horario">
            <Horario />
          </div>
          <div className="Relogio">
            <Relogio />
          </div>
        </div>
        <a className="github" href="https://github.com/marcosmwx">
          Github: Marcos Willian
        </a>
      </div>
    </div>
  );
}

export default App;
