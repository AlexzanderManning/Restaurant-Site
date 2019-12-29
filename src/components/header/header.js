import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#EF5C35',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      

      <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style={{ margin: 0 }} src='https://eatpastaria.com/nashville/wp-content/themes/pastaria/images/logo.png'></img>
        </Link>

        {/* <div>
          <ul>
            <li>Home</li>
            <li>HOURS</li>
            <li>Menus</li>
            <li>GIFT CERTIFICATES</li>
            <li>EMPLOYMENTS</li>
          </ul>
        </div> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
