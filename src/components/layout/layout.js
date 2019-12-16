import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="content-container">
      <div class="content">
        <Header />
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
