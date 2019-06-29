import React  from 'react';
import {Link} from "react-router-dom"
import {Navbarsection,Logo,Logotext,Ullist,Listitem,Anchor,StyledNavLink } from"./style.js"


const Navbar = () => {
    return (
        <Navbarsection className="navbar">
        <div className="container">
            <Logo className="logo">
                <Logotext className="logo-text">Ultra Profile</Logotext>
            </Logo>

            <Ullist className="ul-list">
                <Listitem className="list-item"><StyledNavLink to="/">Home</StyledNavLink></Listitem>
                <Listitem className="list-item"><Anchor href="#">Work</Anchor></Listitem>
                <Listitem className="list-item"><Anchor href="#">Portfolio</Anchor></Listitem>
                <Listitem className="list-item"><Anchor href="#">Resume</Anchor></Listitem>
                <Listitem className="list-item"><Anchor href="#">About</Anchor></Listitem>
                <Listitem className="list-item"><StyledNavLink to="/contact">Contact</StyledNavLink></Listitem>
            </Ullist>
        </div>
    </Navbarsection>
    )
}
export default Navbar;