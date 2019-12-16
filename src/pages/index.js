import React from "react"

import "./index.css"
import BoxesImage from "../components/BoxesImage"
import Layout from "../components/layout/layout"
import moneyIcon from "../images/icons/money-bill-wave-solid.svg"
import thumbsUpIcon from "../images/icons/thumbs-up-regular.svg"
import mapIcon from "../images/icons/map-marked-alt-solid.svg"
import IconAndText from "../components/iconAndText/IconAndText"

const IndexPage = () => (
  <Layout>
    <BoxesImage />
    <div className="main-body">
      <div className="icons-and-text">
        <IconAndText
          icon={moneyIcon}
          titleText="Affordable Rates"
          bodyText="As one of the best movers in Muskoka, we offer the most affordable prices for our clients. Our rates start as low as $79.99! For a local,"
        />
        <IconAndText
          icon={thumbsUpIcon}
          titleText="Reliable Service"
          bodyText="As one of the best movers in Muskoka, we offer the most affordable prices for our clients. Our rates start as low as $79.99! For a local,"
        />
        <IconAndText
          icon={mapIcon}
          titleText="Locally Run"
          bodyText="As one of the best movers in TorMuskokaonto, we offer the most affordable prices for our clients. Our rates start as low as $79.99! For a local,"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
