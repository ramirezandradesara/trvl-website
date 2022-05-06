import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button';


//rfce is a shortcut
function Navbar() {

  // opens hamburger menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // once hamburger menu is open, it will close
  const closeMobileMenu = () => setClick(false);

  // displays styles and sizes according to the screen size
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo'></Link>
          TRVL <i className='fab fa-typo3'/>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={() => setClick(!click)}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to="/"
                className='nav-links'
                onClick={closeMobileMenu}
              >Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to="/services"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to="/products"
                className='nav-links'
                onClick={closeMobileMenu}
              >Products
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to="/sign-up"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle={'btn--outline'}>Sing Up</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar