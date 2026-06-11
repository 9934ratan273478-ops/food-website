import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/Food Logo.png";
import { TiThMenu } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [mobileViewOpen, setMobileViewOpen] = useState(false);
  
  const navigate =useNavigate()
  function closeMobileMenu(){
    setMobileViewOpen(false)
  }

  function GotoTable(){
    navigate("/booktable")
  }
  return (
    <>
      <nav className="Navbar">
        {/* Top Section */}
        <div className="top-section">
          {/* Left */}
          <div className="top-left">
            <div className="phone">
              <FaPhoneAlt size={20} />
              91 9934273478
            </div>

            <div className="email">
              <CgMail size={30} />
              www.9934raj273478@gmail.com
            </div>
          </div>

          {/* Right */}
          <div className="top-right">
            <a href="https://x.com/home">
              <div className="social-icons-div">
                <FaTwitter size={15} />
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100087131604899">
              <div className="social-icons-div">
                <FaFacebookF size={15} />
              </div>
            </a>
            <a href="https://www.instagram.com/rajratan441/">
              <div className="social-icons-div">
                <FaInstagram size={15} />
              </div>
            </a>
            <a href="https://github.com/9934ratan273478-ops">
              <div className="social-icons-div">
                <FaGithub size={15} />
              </div>
            </a>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="bottom-section">
          {/* Logo */}
          <div className="logo-div">
            <img className="logo" src={logo} alt="Logo" />
            <h2 className="name">Raj FoodShop</h2>
          </div>
          {/* Menu */}
          <div className="Menu">
            <Link className="menu-item" to={"/"}>Home</Link>
            <Link className="menu-item" to={"/About"}>About</Link>
            <Link className="menu-item" to={"/Menu"}>Menu</Link>
            <Link className="menu-item" to={"/Pages"}>Pages</Link>
            <Link className="menu-item" to={"/Contact"}>Contact</Link>
          </div>
          {/* button  */}
          <div className="Button">
            <button onClick={GotoTable} className="bk-btn">Book a Table</button>
            <CgProfile  onClick={()=> navigate("/login")} size={40} />

          </div>

          <div className="menu-icon">
            {mobileViewOpen ? <RxCross2 size={20} onClick={() => setMobileViewOpen(!mobileViewOpen)} /> : <TiThMenu size={20} onClick={() => setMobileViewOpen(!mobileViewOpen)} />}
          </div>

        </div>
        {mobileViewOpen && (
        <div className="Mobile-menu-item">
        <div className="mobile-menues">
        <Link className="menu-item" onClick={closeMobileMenu} to={"/"}>Home</Link>
        <Link className="menu-item" onClick={closeMobileMenu} to={"/About"}>About</Link>
        <Link className="menu-item" onClick={closeMobileMenu} to={"/Menu"}>Menu</Link>
        <Link className="menu-item" onClick={closeMobileMenu} to={"/Pages"}>Pages</Link>
        <Link className="menu-item" onClick={closeMobileMenu} to={"/Contact"}>Contact</Link>

        <div className="mobile-btn">
        <button onClick={()=> {GotoTable(); closeMobileMenu();}} className="bk-tbl">Book a Table</button>
        <button onClick={()=> {navigate("/login");closeMobileMenu();}}className="lgn-sup">Login/Sign up</button>
        </div>
        </div>
        </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;