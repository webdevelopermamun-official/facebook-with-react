import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

import "./Auth.scss"
import { useState } from "react";
import ModalPopup from "../../components/ModalPopup/ModalPopup";


const Auth = () => {
  const [popupModal, setPopupModal] = useState(false)
  return (
    <>
    {
      popupModal &&

      <ModalPopup title="Sign Up" shortDsc = "Its quick and easy." hide= {setPopupModal}>
          <div className="signup-form-area">
            <form action="">
              <div className="input-divider">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Surname" />
              </div>
              <input type="text" placeholder="Mobile number or email address" />
              <input type="password" placeholder="New password" />
              <div className="select-fild-lable">
                <p htmlFor="dob">Date of birth: <a href="" title="Click for more information"><FaQuestionCircle /></a></p>
              </div>
              <div className="date-of-birth">
                <select id="dob" className="day" name="day">
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select className="month" name="month">
                  <option value="January">Jan</option>
                  <option value="February">Feb</option>
                  <option value="March">Mar</option>
                  <option value="April">Apr</option>
                  <option value="May">May</option>
                  <option value="June">Jun</option>
                  <option value="July">Jul</option>
                  <option value="August">Aug</option>
                  <option value="September">Sep</option>
                  <option value="October">Oct</option>
                  <option value="November">Nov</option>
                  <option value="December">Dec</option>
                </select>
                <select className="year" name="year">
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                </select>
              </div>
              <div className="select-fild-lable">
                <p>Gender: <a href="" title="Click for more information"><FaQuestionCircle /></a></p>
                <div className="gender">
                  <div htmlFor="male" className="gender-box">
                    <label htmlFor="male">Male:</label>
                    <input type="radio" id="male" name="gender" />
                  </div>
                  <div className="gender-box">
                    <label htmlFor="female">Female:</label>
                    <input type="radio" id="female" name="gender" />
                  </div>
                  <div className="gender-box">
                    <label htmlFor="Custom">Custom:</label>
                    <input type="radio" id="Custom" name="gender" />
                  </div>
                </div>
              </div>
              <div className="signup-content">
                <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                <p>By clicking Sign Up, you agree to our <Link>Terms</Link>, <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link>. You may receive SMS notifications from us and can opt out at any time.</p>
              </div>
              <div className="submit-btn">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>

      </ModalPopup>
    }
      <section className="auth-area">
        <div className="auth-container">
          <div className="auth-content">
            <div className="auth-left-side">
              <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
              <h2>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <div className="auth-right-side">
              <div className="auth-login-box">
                <form action="">
                  <input type="text" placeholder="Email address or phone number" />
                  <input type="password" placeholder="Password" />
                  <button type="submit">Log In</button>
                </form>
                <div className="auth-reset-register">
                  <Link to = "" >Forgotten password?</Link>
                  <div className="divider"></div>
                  <button onClick={() => setPopupModal(true)} >Create new account</button>
                </div>
              </div>
              <p><Link>Create a Page</Link> for a celebrity, brand or business.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="auth-footer">
        <div className="auth-container">
          <ul className="language">
            <li>English (UK)</li>
            <li><a href="">বাংলা</a></li>
            <li><a href="">অসমীয়া</a></li>
            <li><a href="">हिन्दी</a></li>
            <li><a href="">नेपाली</a></li>
            <li><a href="">Bahasa Indonesia</a></li>
            <li><a href="">العربية</a></li>
            <li><a href="">中文(简体)</a></li>
            <li><a href="">Bahasa Melayu</a></li>
            <li><a href="">Español</a></li>
            <li><a href="">Português (Brasil)</a></li>
            <li className="language-icon"><a href=""><FaPlus /></a></li>
          </ul>
          <div className="divider"></div>
          <ul>
            <li><a href="">Sign Up</a></li>
            <li><a href="">Log in</a></li>
            <li><a href="">Messenger</a></li>
            <li><a href="">Facebook Lite</a></li>
            <li><a href="">Video</a></li>
            <li><a href="">Places</a></li>
            <li><a href="">Games</a></li>
            <li><a href="">Marketplace</a></li>
            <li><a href="">Meta Pay</a></li>
            <li><a href="">Meta Store</a></li>
            <li><a href="">Meta Quest</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Threads</a></li>
            <li><a href="">Fundraisers</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Voting Information Centre</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Privacy Centre</a></li>
            <li><a href="">Groups</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Create ad</a></li>
            <li><a href="">Create Page</a></li>
            <li><a href="">Developers</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Cookies</a></li>
            <li><a href="">AdChoices</a></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Contact uploading and non-users</a></li>
          </ul>
          <p>Meta © 2023</p>
        </div>
      </section>
    </>
  )
}

export default Auth