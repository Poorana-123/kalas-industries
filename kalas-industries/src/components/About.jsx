import "../styles/About.css";
import aboutImg from "../assets/hero6.webp";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {

  return (

    <section className="about" id="about">


      {/* Top Heading */}

      <div className="about-heading">


        <span className="section-tag">
          ABOUT KALA'S INDUSTRIES
        </span>


        <h2>
          Designing Elegant Spaces
          <span>
            Through Premium Collections
          </span>
        </h2>


        <p>
          Kala's Industries creates premium interior solutions
          that combine modern aesthetics, innovative designs,
          and superior craftsmanship to transform homes into
          elegant and functional living spaces.
        </p>


      </div>





      {/* Main About Content */}

      <div className="about-main">



        {/* Circular Image */}

        <div className="about-image">

          <img
            src={aboutImg}
            alt="Kala's Industries Interior Collection"
          />

        </div>






        {/* Collections Section */}

        <div className="about-left">


          <h3>
            Our Collections
          </h3>


          <p>
            Discover our exclusive range of interior solutions
            including luxury wardrobes, modular kitchens,
            living room furniture, and customized storage
            solutions.

            Each collection is thoughtfully designed with
            premium finishes, smart functionality, and
            timeless elegance to suit modern lifestyles.
          </p>



          <div className="about-stats">


            <div>

              <h4>
                10+
              </h4>

              <span>
                Years Experience
              </span>

            </div>



            <div>

              <h4>
                500+
              </h4>

              <span>
                Completed Projects
              </span>

            </div>



          </div>


        </div>







        {/* Services Section */}

        <div className="about-right">


          <h3>
            Our Services
          </h3>



          <div className="feature">

            <FaCheckCircle/>

            <span>
              Customized Interior Design Solutions
            </span>

          </div>




          <div className="feature">

            <FaCheckCircle/>

            <span>
              Premium Wardrobes & Modular Kitchens
            </span>

          </div>




          <div className="feature">

            <FaCheckCircle/>

            <span>
              Expert Space Planning & Consultation
            </span>

          </div>




          <div className="feature">

            <FaCheckCircle/>

            <span>
              Professional Installation & After Sales Support
            </span>

          </div>




          <div className="feature">

            <FaCheckCircle/>

            <span>
              High Quality Materials & Hardware Fittings
            </span>

          </div>



        </div>




      </div>



    </section>

  );

};


export default About;