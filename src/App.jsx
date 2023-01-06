import './App.css'
import Contador from './components/contador'
import Horario from './components/formHorario'


function App() {

  return (
    <div className="App">
      <h2>Contador de Horas</h2>
      <div class="AmaisMenos">
        <Contador/>
        <Horario/>
      </div>
    
      <a href="https://github.com/marcosmwx">by: Marcos Willian</a>
    </div>
  )
}

export default App
