import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="tabs-container">
      <li>
        <Link className="tab" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="tab" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="tab" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
