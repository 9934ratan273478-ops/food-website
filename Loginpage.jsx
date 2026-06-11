
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/foodbackground.png"
import bgimage2 from "../assets/backgroundside.jpg"

function Loginpage() {

  const navigate=useNavigate();
  return (
    <div
      className="body-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        
        {/* Left Side */}
        <div
          className="login-box">
          <h1>Log In</h1>
          <p>Welcome back! Please enter your details</p>

          <form>
            <label className="lavelcolor">Email</label>
            <input type="email" placeholder="Enter your email" />

            <label className="lavelcolor">Password</label>

            <div className="password-box">
              <input type="password" placeholder="Enter password" />
              <i className="fa-solid fa-eye"></i>
            </div>

            <a href="#" className="forgot">
              Forgot password?
            </a>

            <button type="submit" className="login-btn">
              Log in
            </button>

            <div className="line">
              <span>Or Continue With</span>
            </div>

            <div className="social-btn">
              <button className="google">
                <i className="fa-brands fa-google"></i> Google
              </button>

              <button className="facebook">
                <i className="fa-brands fa-facebook"></i> Facebook
              </button>
            </div>

            <p className="signup">
               Don't have account?
              <span onClick={() => navigate("/register")}>
                Sign up
               </span>
              </p>
         </form>
        </div>

        {/* Right Side */}
        <div className="image-box">
          <img src={bgimage2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Loginpage;