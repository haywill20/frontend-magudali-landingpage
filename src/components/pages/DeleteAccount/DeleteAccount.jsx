import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import paso1 from "../../../assets/images/paso1.png";
import paso2 from "../../../assets/images/paso2.png";
import paso3 from "../../../assets/images/paso3.png";
import paso4 from "../../../assets/images/paso4.png";
import shape15 from "../../../assets/images/shape/shape-15.png";
import shape14 from "../../../assets/images/shape/shape-14.png";
import shape13 from "../../../assets/images/shape/shape-13.png";

const DeleteAccount = () => {
  return (
    <>
      <Header />
      <div className="appie-page-title-area" style={{ height: "100px" }}></div>
      <section
        className="appie-features-area-2 appie-features-area-5 pt-90 pb-100"
        id="features"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">
                  Pasos para eliminación <br /> de tu cuenta Magudali
                </h3>
                <p>
                  Estos sencillos pasos te ayudarán a eliminar tu cuenta si lo
                  deseas.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-30 align-items-center">
            <div className="col-lg-6">
              <div className="appie-features-boxes ">
                <div className="appie-features-box-item appie-features-box-5-item">
                  <h4 className="title">Paso 1</h4>
                  <p>Damos tap en el icono de perfil.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-features-thumb wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <img src={paso1} alt="" />
              </div>
            </div>
          </div>
          <div
            className="appie-page-title-area"
            style={{ height: "50px" }}
          ></div>
          <div className="row mt-30 align-items-center">
            <div className="col-lg-6">
              <div className="appie-features-boxes ">
                <div className="appie-features-box-item appie-features-box-5-item">
                  <h4 className="title">Paso 2</h4>
                  <p>
                    Luego hacemos scroll hasta la parte inferior de la lista en
                    donde dice Eliminar cuenta
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-features-thumb wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <img src={paso2} alt="" />
              </div>
            </div>
          </div>
          <div
            className="appie-page-title-area"
            style={{ height: "50px" }}
          ></div>
          <div className="row mt-30 align-items-center">
            <div className="col-lg-6">
              <div className="appie-features-boxes ">
                <div className="appie-features-box-item appie-features-box-5-item">
                  <h4 className="title">Paso 3</h4>
                  <p>
                    En este punto daremos clic en SI para elimina o en NO por si
                    nos arrepentimos de eliminar nuestra cuenta
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-features-thumb wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <img src={paso3} alt="" />
              </div>
            </div>
          </div>
          <div
            className="appie-page-title-area"
            style={{ height: "50px" }}
          ></div>
          <div className="row mt-30 align-items-center">
            <div className="col-lg-6">
              <div className="appie-features-boxes ">
                <div className="appie-features-box-item appie-features-box-5-item">
                  <h4 className="title">Paso 4</h4>
                  <p>
                    Si nuestra respuesta fue SI tendremos que colocar nuestra
                    contraseña para poder verificar la eliminacion de nuestra
                    cuenta.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-features-thumb wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <img src={paso4} alt="" />
              </div>
            </div>
          </div>
          <div className="appie-section-title text-center">
            <p>
              Listo, despues de seguir estos sencillos pasos podrás eliminar tu
              cuenta en magudali S.A, puedes volver a crear tu cuenta cuando lo
              desees, tus datos serán totalmente eliminados de nuestros
              registros en las proximas 24 horas.
            </p>
          </div>
        </div>

        <div className="features-shape-1">
          <img src={shape15} alt="" />
        </div>
        <div className="features-shape-2">
          <img src={shape14} alt="" />
        </div>
        <div className="features-shape-3">
          <img src={shape13} alt="" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DeleteAccount;
