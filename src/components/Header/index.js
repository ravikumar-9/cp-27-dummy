// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  console.log(props)

  return (
    <nav className="header-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <ul className="menu-container">
        <Link to="/" className="nav-link">
          <li className="nav-item">Home</li>
        </Link>

        <li className="nav-item nav-link">Products</li>
        <li className="nav-item nav-link">Cart</li>
        <li className="nav-link">
          <button type="button" className="login-button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
