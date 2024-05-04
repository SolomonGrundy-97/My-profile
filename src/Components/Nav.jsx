import React from 'react'
import MyLogo from '../images/logo_trial.png';


const Nav = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg fixed-top bg_color " aria-label='Navbar'>
  <div className="container-fluid">
    <a className="navbar-brand " href="/"><img src={MyLogo} alt="logo_image"
    className='logo_image rounded-3' /></a>
    <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

       {/* NAVIGATION_ICON_LINKS... */}
      <ul className="navbar-nav">
        
        <li className="nav-item text-white">
          <a href='/#about' className="nav-a  nav_expansion" > About </a> |
        </li>

        <li className="nav-item text-white">
          <a href='/#contact' className="nav-a  nav_expansion"> Contact </a> |
        </li>

        <li className="nav-item text-white">
        <a href='/#skills' className="nav-a  nav_expansion"> Skills </a> |
        </li>

        <li className="nav-item">
          <a href='/#projects' className="nav-a  nav_expansion"> Projects </a> 
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav
