import React, { Component } from 'react'
import './stylesheets/header.css'

class Header extends Component {
    render() {
        return(
           <nav className="navigation">
               <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/all">All Recipes</a></li>
                   <li><a href="/add">Add Recipe</a></li>
               </ul>
           </nav>
        )
    }
}

export default Header