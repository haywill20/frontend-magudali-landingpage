import React, { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Card from "../shared/CardJobs";
import apiUrl from "../config/Config";
import Error from "./ErrorPage"
import axios from "axios";
const URI = `${apiUrl}/empleos/`;

const JobsPage = () => {
  const [empleos, setEmpleos] = useState([]);
  // variable para capturar los códigos de estado
  const [statusCode, setStatusCode] = useState([]);

  useEffect(() => {
    getEmpleos();
  }, []);

  // plantilla reutilizable de vacantes disponibles
  const vacanciesAvailable = () => {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="appie-section-title text-center">
            <h3 className="appie-title">Vacantes disponibles</h3>
            <p>
              Te invitamos a aplicar a cualquiera de nuestras vacantes que
              se ajuste a tu perfil tecnológico.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }

  //procedimiento para mostrar todos los empleos
  const getEmpleos = async () => {
    await axios.get(URI)
      .then(res => {
        setEmpleos(res.data);
        // captura el código de respuesta ok!
        setStatusCode(res.status);
      })
    // captura del codigo de estado error, enviado por el servidor
      .catch( err => setStatusCode(err.response.status))
  };

  return (
    <>
      <Header />
      <section className="appie-services-2-area pt-150 mb-50" id="service">
        <div className="container">
          {/* valida si hay trabajos, lo cual muestra un titulo */}
          { statusCode === 200 ?
              ( vacanciesAvailable() ) :
              null
          }

          <div className="row justify-content-center">
          {
            statusCode === 200 ? (
              empleos.map((empleo) => (
                <div key={empleo.id} className="col-lg-4 col-md-6">
                  <Card
                    id={empleo.id}
                    nombre={empleo.nombre}
                    resumen={empleo.resumen}
                    icon={empleo.icon}
                    estilo={empleo.estilo}
                  />
                </div>
              ))
            ) : statusCode === 400 ? (
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Código de Error: {statusCode}</h3>
                <h3 className="apple-title">Solicitud incorrecta, faltan parámetros</h3>
              </div>
            ) : statusCode === 404 ? (
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Código de Error: {statusCode}</h3>
                <h3 className="appie-title">No hay vacantes disponibles</h3>
              </div>
            ) : statusCode === 500 ? (
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Código de Error: {statusCode}</h3>
                <h3 className="appie-title">Error Interno del Servidor</h3>
              </div>
            ) : (
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Código de Error: {statusCode}</h3>
                <h3 className="appie-title">Recuerso no Encontrado</h3>
              </div>
            )
          }
          </div>
        </div>
      </section>
      <Footer />
      </>
  );
};

export default JobsPage;
