import React from "react"

import "./IconAndText.css"

const IconAndText = ({ icon, titleText, bodyText }) => {
  return (
    <div className="icon-and-text-container">
      <img src={icon} fill="#C79D5C" />
      <h2>{titleText}</h2>
      <p className>{bodyText}</p>
    </div>
  )
}

export default IconAndText
