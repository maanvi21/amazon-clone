import React,{useState} from 'react'
import './Header.css'
import logo from  './amazon_logo.png';
import {Link} from 'react-router-dom';
import { useStateValue } from './Context/Context';
import { auth } from './firebase';
export default function Header({email}) {

const [{basket,user},dispatch]= useStateValue();
const handleAuthenticaton = () => {
  if (user) {
    auth.signOut();
  }
}


    return (
         <div className="header">
        <Link to="/">
        <img
          className="header_logo" src={logo} alt="logo" />
      </Link>
      <div className="header_search" id="header_search">
          <input type="search" className="header_search_input" />
          <button type="submit" className="searchIcon"> <i className="fa-solid fa-magnifying-glass fa-lg"></i></button>
        </div>
        
        <div className="header_nav">
        <Link to={!user && '/login'}>
          <div className="header_option" onClick={handleAuthenticaton} >
            <span className="header_option_one"> Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_option_two">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
          </Link>
          <div className="header_option">
            <span className="header_option_one"> Returns</span>
            <span className="header_option_two"> & Orders </span>

          </div>

          <div className="header_option">
            <span className="header_option_one"> Your</span>
            <span className="header_option_two"> Prime </span>

          </div>

         <Link to ="/checkout"> 
         <div className="header_option_basket">
            <div className="option_basket">
              <i class="fa-solid fa-cart-shopping fa-lg" id="option_basket" style={{ color: "#ffffff" }}></i>
              <span className="header_option_two basketcount"> {basket?.length} </span>
            </div>

          </div>
         
         </Link>

        </div>
        </div>
    
      )
    }
