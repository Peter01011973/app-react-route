import React from 'react';
import {NavLink} from 'react-router-dom';

import './header.scss';
import logo from '../../assets/images/sonic-draw-logo.png';
import { useAuthConext } from '../../auth-context/auth-context';

const Header = () => {
   const {auth} = useAuthConext();
   return (
      <nav className="header">
         <div className="header__logo logo">
            <img className="logo__image" src={logo} alt="logo" />
         </div>
         <ul className="header__menu menu">
            <li className="menu__item">
               <NavLink 
                  className="menu__link" 
                  activeClassName="menu__link-selected"
                  exact
                  to='/'>home</NavLink>
            </li>
            <li className="menu__item">
               <NavLink 
                  className="menu__link" 
                  activeClassName="menu__link-selected"
                  to='/data'>data</NavLink>
            </li>
            <li className="menu__item">
               <NavLink 
                  className="menu__link"
                  activeClassName="menu__link-selected" 
                  to='/contacts'>contacts</NavLink>
            </li>
            <li className="menu__item submenu">
               <NavLink 
                  className="menu__link"
                  activeClassName="menu__link-selected" 
                  to='/fertilizers'>Fertilizers
               </NavLink>
               <ul className="submenu__menu">
                  <li className="submenu__item">
                     <NavLink 
                        className="submenu__link" 
                        to="/fertilizers/liquid"
                        activeClassName="submenu__link-selected">Liquid fertilizers</NavLink>
                  </li>
                  <li className="submenu__item">
                     <NavLink 
                        className="submenu__link"
                        activeClassName="submenu__link-selected" 
                        to="/fertilizers/granulated">Granulated fertilizers</NavLink>
                  </li>
                  <li className="submenu__item">
                     <NavLink 
                        className="submenu__link" 
                        activeClassName="submenu__link-selected"
                        to="/fertilizers/organic">Organic fertilizers</NavLink>
                  </li>
               </ul>
            </li>
            <li className="menu__item">
               <NavLink 
                  className="menu__link"
                  activeClassName="menu__link-selected" 
                  to='/protected'>{auth ? 'Unprotected page' : 'Protected page'}</NavLink>
            </li>
            <li className="menu__item">
               <NavLink 
                  className="menu__link" 
                  activeClassName="menu__link-selected"
                  to='/signin'>sign in</NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Header;