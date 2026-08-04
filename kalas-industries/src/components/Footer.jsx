import "../styles/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";


const Footer = () => {

  return (

    <footer className="footer">


      <div className="footer-container">



        {/* Brand */}

        <div className="footer-brand">

          <h2>
            Kala's Industries
          </h2>


          <p>
            Creating elegant interior solutions with
            premium craftsmanship, innovative designs,
            and superior quality materials.
          </p>



          <div className="social-icons">


            <a href="#">
              <FaFacebookF/>
            </a>


            <a href="#">
              <FaInstagram/>
            </a>


            <a href="#">
              <FaYoutube/>
            </a>


            <a href="#">
              <FaWhatsapp/>
            </a>


          </div>


        </div>





        {/* Quick Links */}

        <div className="footer-links">


          <h3>
            Quick Links
          </h3>


          <a href="#about">
            About Us
          </a>


          <a href="#collections">
            Collections
          </a>


          <a href="#solutions">
            Solutions
          </a>


          <a href="#craftsmanship">
            Craftsmanship
          </a>


          <a href="#experience">
            Experience Centre
          </a>


        </div>







        {/* Collections */}

        <div className="footer-links">


          <h3>
            Collections
          </h3>


          <a href="#">
            Luxury Wardrobes
          </a>


          <a href="#">
            Modular Kitchens
          </a>


          <a href="#">
            Living Spaces
          </a>


          <a href="#">
            Bedroom Interiors
          </a>


          <a href="#">
            Custom Designs
          </a>


        </div>







        {/* Contact */}

        <div className="footer-contact">


          <h3>
            Contact Us
          </h3>



          <p>
            <FaMapMarkerAlt/>
            Chennai, Tamil Nadu
          </p>



          <p>
            <FaPhoneAlt/>
            +91 XXXXX XXXXX
          </p>



          <p>
            <FaEnvelope/>
            info@kalasindustries.com
          </p>



        </div>



      </div>







      {/* Bottom Footer */}


      <div className="footer-bottom">


        <p>
          © {new Date().getFullYear()} Kala's Industries.
          All Rights Reserved.
        </p>


        <p>
          Designed with Quality & Craftsmanship
        </p>


      </div>




    </footer>

  );

};


export default Footer;