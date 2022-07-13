import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import {useGlobalContext} from "../context/context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
    const {sidebar,closeSidebar} = useGlobalContext();
  return (
    <div className={`sidebar ${sidebar ? 'show-sidebar' : ''}`}>
        <div className="top-sidebar">
            <h2>drink team</h2>
            <button className='btn btn-danger  button' onClick={closeSidebar}> X </button>
        </div>
       
        <ul className='links-sidebar'>
            <li ><FontAwesomeIcon className='icon-link-center'   icon={faHouse} /><Link onClick={closeSidebar} className='link-center-header' to={'/'}>Home</Link></li>
            <li><FontAwesomeIcon className='icon-link-center' onClick={closeSidebar} icon={faUsers} /><Link onClick={closeSidebar} className='link-center-header' to={'/about'}>about</Link ></li>
            <li><FontAwesomeIcon className='icon-link-center' onClick={closeSidebar} icon={faCommentDots} /><Link onClick={closeSidebar} className='link-center-header' to={'/contact'}>contact</Link></li>
        </ul>
        <ul className='social-sidebar'>
            <li><FontAwesomeIcon className='social-right' icon={faFacebook} /></li>
            <li><FontAwesomeIcon className='social-right' icon={faTwitter} /></li>
            <li><FontAwesomeIcon className='social-right' icon={faYoutube} /></li>
        </ul>
    </div>
  )
}

export default Sidebar