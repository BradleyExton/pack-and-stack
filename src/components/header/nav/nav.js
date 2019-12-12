import React from "react"
import { Link } from "gatsby"
import "./nav.css"

const NavLink = ({ to, children }) => (
  <h3>
    <Link className="nav-item" activeClassName="active" to={to}>
      {children}
    </Link>
  </h3>
)

const Nav = () => (
  <nav>
    <NavLink to="/rates">RATES</NavLink>
    <NavLink to="/services">SERVICES</NavLink>
    <NavLink to="/quote">QUOTE</NavLink>
  </nav>
)

export default Nav
