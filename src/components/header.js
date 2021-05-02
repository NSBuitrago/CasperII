import * as React from "react"
import PropTypes from "prop-types"

const Header = () => (
  <header className="main-header">
    <div className="header-left-wrap">
      <p className="header-text01">Hi, I'm <strong>Nicolas Buitrago.</strong></p>
      <p className="header-text02">Synthetic Biologist <br></br>+ Neuroengineer <br></br>+ Biohacker</p>
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
