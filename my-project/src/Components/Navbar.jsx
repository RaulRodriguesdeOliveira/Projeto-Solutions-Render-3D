import React from 'react'
import logo from "/SOLUTIONS.jpg";

const Navbar = () => {    

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid align-items-center d-flex flex-lg-row flex-column">
              <a className="navbar-brand" href="/">
                <img className="NavLogo" src={logo} alt="" />
              </a>
    
              <div className="collapse d-flex justify-content-end" id="navbarSupportedContent">
                <span className='text-center' id='nav-autor'>Luís Felipe Torres Blanca</span>
              </div>
            </div>
          </nav>
  )
}

export default Navbar