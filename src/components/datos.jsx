import "../asyncMock"
import Muestreo from "./dato";
import "./datos.css"


function Datos() {
  const DB = [
    {id:1,temp:32},
    {id:2,hum:55},
    {id:3,pres:1013},
    {id:4,cau:20},
    {id:5,ten:220},
    {id:6,con:20},
]
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Emergencia
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="modal-msg">Esta seguro de tomar la accion?</h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>



      <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Panel</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mapa</a>
              </li>
            </ul>
              <button type="button" class="emergencia btn btn-danger navbar-brand" data-bs-toggle="modal" data-bs-target="#exampleModal">Emergencia</button>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-6">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                          <h5 className="card-title titulos">Sala</h5>
                          <div className="card-cont">
                            
                            <div className="row row-muestreo">
                              <div className="col-6">
                                <p className="card-text"><span><img className="imagen" src="./src/assets/img/fiebre.png" alt="" /></span>Temperatura</p>
                              </div>
                              <div className="col-6 muestreo">
                                <Muestreo med={DB[0].temp} />
                              </div>
                            </div>

                            <div className="row row-muestreo">
                              <div className="col-6">
                              <p className="card-text"><span><img className="imagen" src="./src/assets/img/humedad.png" alt="" /></span>Humedad</p>
                              </div>
                              <div className="col-6 muestreo">
                              <Muestreo med={DB[1].hum} />°
                              </div>
                            </div>
                            
                            <div className="row row-muestreo">
                              <div className="col-6">
                              <p className="card-text"><span><img className="imagen" src="./src/assets/img/presion.png" alt="" /></span>Presion</p>
                              </div>
                              <div className="col-6 muestreo">
                              <Muestreo med={DB[2].pres} />hPa
                              </div>
                            </div>
                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                          <h5 className="card-title titulos">Sistema</h5>
                          <div className="card-cont">
                            
                            <div className="row row-muestreo">
                                <div className="col-6">
                                <p class="card-text textos"><span><img className="imagen" src="./src/assets/img/caudal.png" alt="" /></span>Caudal</p>
                                </div>
                                <div className="col-6 muestreo">
                                <Muestreo med={DB[3].cau} />M³/s
                                </div>
                              </div>

                              <div className="row row-muestreo">
                                <div className="col-6">
                                <p class="card-text textos"><span><img class="imagen" src="./src/assets/img/tension.png" alt="" /></span>Tensión</p>
                                </div>
                                <div className="col-6 muestreo">
                                <Muestreo med={DB[4].ten} />V
                                </div>
                              </div>
                              
                              <div className="row row-muestreo">
                                <div className="col-6">
                                <p class="card-text textos"><span><img className="imagen" src="./src/assets/img/consum.png" alt="" /></span>Consumo de Corriente</p>
                                </div>
                                <div className="col-6 muestreo">
                                <Muestreo med={DB[5].con} />kW/h
                                </div>
                              </div>

                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}


export default Datos;

/*



*/