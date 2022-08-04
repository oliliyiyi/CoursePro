import React from "react"
import {Link} from 'react-router-dom';
import "./footer.css"

function Footer(){
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      
      <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to ='/home'>Home</Link>
              </li>
              <li>
                <Link to ='/aboutus'>About Us</Link>
              </li>
              <li>
                <Link to ='/menu'>Menu</Link>
              </li>
              <li>
                <Link to ='/contactus'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road <br />
              Clear Water Bay, kowloon <br />
              HONG KONG <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678 <br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321 <br />
              <i className="fa fa-envelope fe-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">academy@course.net</a>
            </address>
          </div>
          <div class="col-12 col-sm-4 align-self-center">
            <div class="text-center">
              <a
                class="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i class="fa fa-google-plus"></i>
              </a>
              <a
                class="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i class="fa fa-facebook"></i>
              </a>
              <a
                class="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i class="fa fa-linkedin"></i>
              </a>
              <a
                class="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i class="fa fa-twitter"></i>
              </a>
              <a
                class="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i class="fa fa-youtube"></i>
              </a>
              <a class="btn btn-social-icon" href="mailto:">
                <i class="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
      
    </>
  )
}

export default Footer
