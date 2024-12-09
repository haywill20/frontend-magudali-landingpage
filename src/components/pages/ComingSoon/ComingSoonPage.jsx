import React, { useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import TitleParagraph from "../../common/TitleParagraph";
import ButtonOrange from "../../common/ButtonOrange";

function ComingSoonPage() {
  useEffect(() => {
    document.title = "Descargar para iOS"; // Título predeterminado de tu sitio web
  }, []);

  return (
    <>
      <Header />
      <section className="appie-download-3-area pt-100 mb-20" id="download">
        <div className="container">
          <TitleParagraph
            title="¡Esperala muy pronto para iOS!"
            paragraph="¡Gracias por tu paciencia! Estamos trabajando en nuestra nueva app de compras para iOS. Pronto podrás disfrutar de todas tus compras favoritas directamente desde tu dispositivo Apple. ¡Mantente atento para esta nueva experiencia con Magudali!"
          />

          <div className=" row">
            <div className="col-lg-12">
              <ButtonOrange
                link={"https://magudali.com/"}
                icon={"fa-solid fa-bag-shopping"}
                text={"Comprar desde la web"}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ComingSoonPage;
