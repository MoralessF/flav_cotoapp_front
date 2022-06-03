// import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div id="Home-Container" style={{ background: "#747E7E" }}>
      <Navbar className="mb-2" sticky="top" style={{ background: "#FF5F5D" }}>
        <Container className="d-flex justify-content-around">
          <Navbar.Brand className="me-0" style={{ color: "#FFFFFF" }} href="#home">CotoApp</Navbar.Brand>
          <div className="d-flex w-50 ms-2">
            <div className="" style={{ color: "white" }}>Pagos</div>
            <div className="ms-4" style={{ color: "white" }}>Reportes</div>
          </div>
          <button type="button" className="btn btn-outline-light">
            <span className="d-none d-md-flex">
              Salir
            <i className="ms-2 bi bi-door-open-fill"></i>
            </span>
            <i className="d-md-none bi bi-door-open-fill"></i>
          </button>
        </Container>
      </Navbar>

      <section className="Body d-flex align-items-center justify-content-center w-100">
        <div className="Body-Container h-100 d-flex align-items-center justify-content-center w-100">
          <Container className="Body-Content p-4 d-flex flex-column align-items-center justify-content-start w-100">
            <div className="mb-4 w-100 d-flex justify-content-between" style={{color:"white"}}>
              <h2>
                  Tus Pagos
              </h2>
              <button type="button" className="red-button">
                  <span>
                  Registrar Pago
                  <i className="ms-2 bi bi-plus-circle"></i>
                  </span>
              </button>
            </div>

            <div className="w-100">
              <table id="tabla-pagos" className="table bg-white">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">Fecha</th>
                    <th scope="col">Concepto</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Descripción</th>
                    <th scope="col" className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-center">03/06/2020</th>
                    <td>Mtto</td>
                    <td>Ok</td>
                    <td>$500.00 mxn</td>
                    <td>Descripción opcional es muy grande a ver que pasa si se pasan de lanza</td>
                    <td className="text-center d-flex justify-content-center">
                      <h3 className="m-0 p-0">
                        <i className="me-3 bi bi-eye-fill m-0 p-0"></i>
                      </h3>
                      <h3 className="m-0 p-0">
                        <i className="me-3 bi bi-pencil-fill" id="editar"></i>
                      </h3>
                      <h3 className="m-0 p-0">
                        <i className="bi bi-trash-fill" id="borrar"></i>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                  <th scope="row" className="text-center">03/06/2020</th>
                    <td>Mtto</td>
                    <td>Ok</td>
                    <td>$500.00 mxn</td>
                    <td>Descripción opcional es muy grande a ver que pasa</td>
                    <td className="text-center d-flex justify-content-center">
                      <h3 className="m-0 p-0">
                        <i className="me-3 bi bi-eye-fill m-0 p-0"></i>
                      </h3>
                      <h3 className="m-0 p-0">
                        <i className="me-3 bi bi-pencil-fill" id="editar"></i>
                      </h3>
                      <h3 className="m-0 p-0">
                        <i className="bi bi-trash-fill" id="borrar"></i>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                  <th scope="row" className="text-center">03/06/2020</th>
                    <td>Mtto</td>
                    <td>Ok</td>
                    <td>$500.00 mxn</td>
                    <td>Descripción opcional es muy grande a ver que pasa</td>
                    <td className="text-center d-flex justify-content-center">
                      <h3 className="m-0 p-0">
                        <i className="me-3 bi bi-eye-fill m-0 p-0"></i>
                      </h3>
                      <h3 className="m-0 p-0">
                        <i className="me-3 bi bi-pencil-fill" id="editar"></i>
                      </h3>
                      <h3 className="m-0 p-0">
                        <i className="bi bi-trash-fill" id="borrar"></i>
                      </h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


          </Container>
        </div>
      </section>

      
        <Navbar
          fixed="bottom"
          expand="lg"
          variant="light"
          style={{ background: "#FFFFFF" }}
          className="d-flex flex-column pt-0"
        >
          <div className="w-100">
          <div  className="p-0 m-0" style={{background:"#FFFFFF"},{height:"2px"}}></div>
            <div className="pb-1" style={{background:"#747E7E"}}></div>
          </div>
          <Container className="d-flex align-items-center justify-content-center">
            <div className="pt-2 d-flex align-items-center justify-content-center">
              <small className="m-0 me-1" style={{ color: "#747E7E" }}>
                Powered by
              </small>
              <Navbar.Brand
                className="m-0 p-0"
                style={{ color: "#FF5F5D" }}
                href="#"
              >
                CotoApp
              </Navbar.Brand>
            </div>
          </Container>
        </Navbar>
      
    </div>
  );
}

export default App;

/*

     <nav className="navbar bg-light" style={{ background: "#FF5F5D" }}>
        <div className="container-fluid">
          <a className="navbar-brand">CotoApp</a>
          <div style={{ color: "white" }}>Coto Obsidiana</div>
          <button className="btn btn-outline-light" type="button">
            Ingresa
          </button>
        </div>
      </nav>


      <Navbar className="mb-2" sticky="top" style={{ background: "#FF5F5D" }}>
        <Container className="d-flex justify-content-around">
          <Navbar.Brand className="me-0" style={{ color: "#FFFFFF" }} href="#home">CotoApp</Navbar.Brand>
          <div style={{ color: "white" }}>Coto Obsidiana</div>
          <button type="button" className="btn btn-outline-light">
            Ingresa
          </button>
        </Container>
      </Navbar>


      <div className="Image h-100 w-100 mb-3 mb-md-0">
              <div className="Image-Container h-100">
                <div className="Image-Content h-100">
                  <img style={{ "objectFit": "cover" }} className="h-100 img-fluid rounded" src="https://www.cosasdearquitectos.com/wp-content/uploads/Residencial-Bosque-Alto-Contexto-Arquitectos-1.jpg"/>
                </div>
              </div>
            </div>

            <div className="Description ms-md-4 w-100">
              <div className="Description-Container">
                <div className="Description-Content">
                  <p className="m-0" >
                    El texto descriptivo, en este caso un retrato de una persona, provoca en el receptor una imagen tal que la realidad descripta cobra forma, se materializa en su mente. En este caso el texto habla de un personaje real: Doña Uzeada de Ribera Maldonado de Bracamonte y Anaya. 
                    Como se trata de una descripcion literaria, la actitud del emisor es subjetiva, dado que pretende transmitir su propia vision personal al describir y la funcion del lenguaje es predominantemente poetica, ya que persigue una estetica en particular.
                  </p>
                </div>
              </div>
            </div>

*/
