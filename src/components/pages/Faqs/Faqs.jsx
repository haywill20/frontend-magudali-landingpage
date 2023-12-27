import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

const Faqs = () => {
  return (
    <>
      <Header />
      <div className="appie-page-title-area" style={{ height: "100px" }}></div>
      <section className="appie-faq-area pb-95">
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Preguntas frecuentes</h3>
                <p>
                  Diferentes preguntas que tienen nuestros usuarios para
                  nosotros.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp wow fadeIn"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div className="accrodion active ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>¿Cuáles son los métodos de pago aceptados?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Aceptamos una amplia gama de métodos de pago para
                            brindarte comodidad al realizar tus compras. Puedes
                            pagar con tarjetas de crédito (Visa, Mastercard,
                            American Express), tarjetas de débito, PayPal y, en
                            algunos casos, transferencias bancarias. Al
                            finalizar tu compra, encontrarás una lista detallada
                            de las opciones disponibles.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    {/* /.accrodion-inner */}
                  </div>
                  <div className="accrodion  ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>Tiempo de entrega y costos de envío:</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            El tiempo de entrega varía según la ubicación y el
                            producto. Generalmente, nuestros tiempos de
                            procesamiento oscilan entre 1 y 2 días laborables.
                            Los costos de envío se calculan automáticamente
                            durante el proceso de compra, y pueden variar
                            dependiendo del destino y el peso del paquete. Te
                            recomendamos revisar el resumen de tu pedido para
                            obtener información detallada sobre el tiempo
                            estimado de entrega y los costos asociados.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    {/* /.accrodion-inner */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp wow fadeIn"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div className="accrodion ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>Política de devolución o reembolso:</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Nuestra prioridad es garantizar la calidad de cada
                            artículo que enviamos. Si por alguna razón recibes
                            un producto en condiciones no satisfactorias o
                            defectuoso, ofrecemos una política de devolución
                            específica para estos casos. Te pedimos que nos
                            informes sobre el estado del artículo dentro de los
                            2 días posteriores a su recepción. Es importante
                            destacar que solo aceptamos devoluciones en casos
                            donde el artículo esté en mal estado o defectuoso.
                            Para iniciar el proceso de devolución, por favor,
                            contáctanos de inmediato a través de nuestro
                            servicio de atención al cliente. Estaremos
                            encantados de guiarte en cada paso del proceso de
                            devolución y hacer que el inconveniente se solucione
                            lo antes posible."
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    {/* /.accrodion-inner */}
                  </div>
                  <div className="accrodion  ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>
                          ¿Los usuarios pueden eliminar su cuenta desde
                          cualquiera de las apps?
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            "Puedes eliminar tu cuenta desde nuestra plataforma
                            móvil, independientemente de si eres cliente,
                            vendedor o repartidor. Para hacerlo, inicia sesión
                            en la aplicación correspondiente y sigue estos pasos
                            en el siguiente enlace:{" "}
                            <a href="/deleteAccount">
                              Pasos eliminacion de cuenta
                            </a>
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    {/* /.accrodion-inner */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="faq-text text-center pt-40">
                <p>
                  No encuentras una respuesta?{" "}
                  <a href="mailto:magudali@outlook.com">Envianos un correo</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faqs;
