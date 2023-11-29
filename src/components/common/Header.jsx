import React, { useEffect, useState } from "react";
import departamentosNicaragua from "../data/departamentos";
import logo from "../../assets/images/logo.png";
import apiUrl from "../config/Config";
import { Link } from "react-router-dom";

import axios from "axios";

/* const ImagenComercios = require.context(
  "../../../../backend/uploads/comercios",
  true
); */

const URIcomercios = `${apiUrl}/comercios/`;
const URIdepartamentos = `${apiUrl}/departamentos/`;
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [menuOpenNegocios, setMenuOpenNegocios] = useState(false);
  const [menuOpenCobertura, setMenuOpenCobertura] = useState(false);

  const handleMenuClickNegocios = () => {
    setMenuOpenNegocios(!menuOpenNegocios);
    setMenuOpenCobertura(false); // Cerrar Cobertura
  };

  const handleMenuClickCobertura = () => {
    setMenuOpenCobertura(!menuOpenCobertura);
    setMenuOpenNegocios(false); // Cerrar Negocios
  };

  const [comercios, setComercios] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    getComercios();
  }, []);

  useEffect(() => {
    getDepartamentos();
  }, []);

  //Procedimiento para mostrar todos los comercios
  const getComercios = async () => {
    const res = await axios.get(URIcomercios);
    setComercios(res.data);
  };

  //Procedimiento para mostrar todos los departamentos
  const getDepartamentos = async () => {
    const res = await axios.get(URIdepartamentos);
    setDepartamentos(res.data);
  };
  return (
    <>
      {/*<!--====== OFFCANVAS MENU PART START ======-->*/}

      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${
                  isMenuOpen ? "active" : ""
                }`}
              >
                <div className="canvas_close">
                  <a onClick={toggleMenu}>
                    <i className="fa fa-times"></i>
                  </a>
                </div>
                <div className="offcanvas-brand text-center mb-40">
                  <img src={logo} alt="" />
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      className={`menu-item-has-children active ${
                        menuOpenNegocios ? "menu-open" : ""
                      }`}
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#" onClick={handleMenuClickNegocios}>
                        Negocios
                      </a>
                      <div className="scrollable-container">
                        <ul
                          className={`sub-menu ${
                            menuOpenNegocios ? "open" : ""
                          }`}
                        >
                          <li>
                            <a href="#">
                              <button className="btn btn-secondary">
                                <i className="fab fa-apple"></i>
                                Descargar para iOS
                              </button>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://play.google.com/store/apps/details?id=com.magudali.seller&pli=1"
                              target="_blank"
                            >
                              <button className="btn btn-success">
                                <i className="fab fa-google-play"></i>
                                Descargar para Android
                              </button>
                            </a>
                          </li>
                          {comercios.map((comercio) => (
                            <li key={comercio.id}>
                              <a href={comercio.link} target={"_blank"}>
                                <img
                                  src={`${apiUrl}/images/${comercio.imagen}`}
                                  alt=""
                                  width={40}
                                />{" "}
                                {comercio.nombre}{" "}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>

                    <li
                      className={`menu-item-has-children active ${
                        menuOpenCobertura ? "menu-open" : ""
                      }`}
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#" onClick={handleMenuClickCobertura}>
                        Covertura
                      </a>
                      <div className="scrollable-container">
                        <ul
                          className={`sub-menu ${
                            menuOpenCobertura ? "open" : ""
                          }`}
                        >
                          {departamentos.map((departamento) => (
                            <li key={departamento.id}>
                              {" "}
                              <a href="/404">
                                {" "}
                                {departamento.departamento}{" "}
                              </a>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li className="menu-item-has-children active">
                      <Link to="/jobspage">Empleos</Link>
                    </li>
                    <li className="menu-item-has-children active">
                      <a href="/404">Nosotros</a>
                    </li>
                    <li className="menu-item-has-children active">
                      <a href="contact.html">Contacto</a>
                    </li>
                    <li className="menu-item-has-children active">
                      <a href="contact.html">Ayuda</a>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="$">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fal fa-envelope"></i> magudali@outlook.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-phone"></i> +(505) 2313 5152
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-map-marker-alt"></i> Nicaragua,
                        León, Costado sur del Cabildo Sutiaba
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<!--====== OFFCANVAS MENU PART ENDS ======-->*/}
      <header className="appie-header-area appie-sticky">
        <div className="container">
          <div className="header-nav-box">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                <div className="appie-logo-box">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-md-1 col-sm-1 order-3 order-sm-2">
                <div className="appie-header-main-menu">
                  <ul>
                    <li>
                      <a href="/">
                        Comercios <i className="fal fa-angle-down"></i>
                      </a>
                      <div className="mega-menu-main-wrap pt-10 scrollable-container">
                        <ul>
                          <li>
                            <a href="#">
                              <button className="btn btn-secondary">
                                <i className="fab fa-apple"></i> Descargar para
                                iOS
                              </button>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://play.google.com/store/apps/details?id=com.magudali.seller&pli=1"
                              target="_blank"
                            >
                              <button className="btn btn-success">
                                <i className="fab fa-google-play"></i>
                                Descargar para Android
                              </button>
                            </a>
                          </li>
                        </ul>
                        <br />
                        <ul className="mega-menu-home">
                          {comercios.map((comercio) => (
                            <li key={comercio.id}>
                              <a href={comercio.link} target={"_blank"}>
                                <img
                                  src={`${apiUrl}/images/${comercio.imagen}`}
                                  alt=""
                                />{" "}
                                {comercio.nombre}{" "}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>

                    <li>
                      {" "}
                      <a href="/">
                        {" "}
                        Cobertura <i className="fal fa-angle-down"></i>{" "}
                      </a>
                      <div className="pages-mega-menu mega-menu-mainn-wrap pt-50 pb-30 scrollable-container">
                        <ul>
                          <li>
                            {" "}
                            <a className="pages-main-content" href="/">
                              {" "}
                              Nicaragua{" "}
                            </a>
                          </li>
                          {departamentos.map((departamento, index) => (
                            <li key={index}>
                              {" "}
                              <a href="/404">
                                {" "}
                                {departamento.departamento}{" "}
                              </a>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>

                    <li>
                      <Link to="/jobsPage"> Empleos </Link>{" "}
                    </li>
                    <li>
                      <Link to="/aboutUs"> Nosotros </Link>{" "}
                    </li>
                    <li>
                      <Link to="/contact"> Contactanos </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                <div className="appie-btn-box text-right">
                  <Link className=" animated_btn ml-30" to="/download">
                    <div className="btn btn-outline-primary">Descargar</div>
                  </Link>
                  <div
                    className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                    onClick={toggleMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
