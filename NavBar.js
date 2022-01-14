import React from "react"
import { Link } from "react-router-dom"

export default function NavBar(){
    return (
       <nav className="mainNav">
           <Link to = "/home" className="navOption"> Home </Link>
           <Link to = "/UserProfile" className="navOption"> User Profile </Link>
       </nav> 
    );
}