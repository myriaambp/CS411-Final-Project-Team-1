import React, { Component }  from 'react';
import "./styles.css"
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaGithub } from "react-icons/fa"
import {Link} from 'react-router-dom'

function GoogleAuth() {

    return (
        <div className="Container">
          <div className = "topbar">
              <h1 className = "mainLogo"> Moviester </h1>
              <button className = "main"> <Link to = {'/'}>  Search <GiMagnifyingGlass /> </Link> </button>
              <button className = "main"> <Link to={'/aboutus'}> About Us <FaGithub /> </Link> </button>
          </div>
            <div>
                <h1 className="title_01"> Sign In! </h1>
                <h4 id='header'> Use Your Google Account </h4>
                <form className ="google_button">
                    <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                </form>
            </div>
        </div>
        
  
    )
  } 
  

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  export default GoogleAuth;
