import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./componentes/TituloSecundario";
import Contador from "./componentes/Contador";

function App() {
  //aqui agreagamos toda la logica que necesite el componente
  const anioActual = 2023;
  return (
    //aqui puedo agregar un poquito mas de logica
    <>
      {/* aqui empiezo a maquetar */}
      <section className="container my-4">
        <h1 className="display-3 text-center">Contador con React</h1>
        {/* <TituloSecundario comision="c73i"></TituloSecundario> */}
        <TituloSecundario comision="c73i" anioActualProps={anioActual}/>
        <Contador/>
      </section>
    </>
  )
}

export default App;
