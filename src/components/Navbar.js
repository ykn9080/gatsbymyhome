import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../images/logo2.png"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="youngki nam" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/interest"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            interests
          </Link>
          <Link
            to="/work"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            works
          </Link>
          {/* <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            recipes
          </Link> */}
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
