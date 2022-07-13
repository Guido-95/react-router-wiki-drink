import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {useGlobalContext} from "../context/context"
import Sidebar from "./Sidebar"
function Header() {
  const {openCloseSidebar} = useGlobalContext();

  return (
    <header>
      <div className="container-fluid header-container">
        <div className="row logo-links-container">
          <div className="logo col-6 offset-lg-1 col-lg-2 text-left">
            <Link className='logo-link' to={'/'}>Wiki Drink</Link>
          </div>
          <div className="icona-mobile col-6 text-right" onClick={openCloseSidebar}>
            <FontAwesomeIcon className='icona' icon={faBars} />
          </div>
          <ul className='links-header col-md-7 col-lg-6'>
            <li>
              <Link className='link-center-header' to={'/'}>
                <FontAwesomeIcon className='icon-link-center'  icon={faHouse} />
                Home
              </Link>
            </li>
            <li>
              <Link className='link-center-header' to={'/about'}>
                <FontAwesomeIcon className='icon-link-center' icon={faUsers} />
                about
              </Link >
            </li>
            <li>
              <Link className='link-center-header' to={'/contact'}>
                <FontAwesomeIcon className='icon-link-center' icon={faCommentDots} />
                contact
              </Link>
            </li>
            
          </ul>
          <ul className='social-header col-md-3 col-lg-3'>
            <li>
              <FontAwesomeIcon className='social-right' icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon className='social-right' icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon className='social-right' icon={faYoutube} />
            </li>
          </ul>
        </div>
       
      </div>
      <Sidebar/>
    </header>
  )
}

export default Header