import React from 'react'
import logo from "/SOLUTIONS.jpg";
// import { useState } from "react";
import Collapse from "bootstrap/js/dist/collapse";
import { Link } from "react-router-dom";


const Navbar = () => {

      // const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      // function toggleMenu() {
      //   const menuElement = document.getElementById("navbarSupportedContent");
      //   const bsCollapse = Collapse.getOrCreateInstance(menuElement);
    
      //   if (isMenuOpen) {
      //     bsCollapse.hide();
      //     setIsMenuOpen(false);
      //   } else {
      //     bsCollapse.show();
      //     setIsMenuOpen(true);
      //   }
      // }
    
      // const closeMenu = () => {
      //   const menuElement = document.getElementById("navbarSupportedContent");
      //   const bsCollapse = Collapse.getOrCreateInstance(menuElement);
      //   bsCollapse.hide();
      //   setIsMenuOpen(false);
      // };
    

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid d-flex flex-lg-row flex-sm-column">
              <a className="navbar-brand" href="/">
                <img className="NavLogo" src={logo} alt="" />
              </a>
              {/* Botão hambúrguer */}
              {/* <button
                id="menu-button"
                style={{ backgroundColor: "white", color: "#050a30" }}
                className="navbar-toggler"
                type="button"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={isMenuOpen ? "true" : "false"}
                aria-label="Toggle navigation"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  "X"
                ) : (
                  <span className="navbar-toggler-icon bg-dark"></span>
                )}
              </button> */}
    
              <div className="collapse d-flex justify-content-end" id="navbarSupportedContent">
                {/* <ul className="d-flex gap-5 ms-auto mb-2 mb-lg-0" style={{listStyle: 'none'}}>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeMenu}>
                      Sobre
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeMenu}>
                      Serviços
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeMenu}>
                      Projetos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeMenu}>
                      Orçamento
                    </Link>
                  </li>
                </ul> */}
                <span>Por Luís Felipe Torres</span>
              </div>
            </div>
          </nav>
  )
}

export default Navbar