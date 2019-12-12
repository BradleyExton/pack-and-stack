import React from "react"
import "./header.css"
import logo from "../../images/pack-and-stack-logo.png"
import Nav from "./nav/nav"

const Header = () => (
  <header>
    <div className="logo">
      <img alt="Pack and Stack logo" src={logo} />
      <h2>Moving Service</h2>
    </div>
    <Nav />
  </header>
)

export default Header
