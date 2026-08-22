import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    space: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! We will contact you shortly.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      space: "",
      message: "",
    });
  };


  return (

    <div className="contact-page">


      {/* =====================================
            CONTACT HERO
      ===================================== */}

      <section className="contact-hero">

        <div className="contact-hero-lines"></div>

        <div className="contact-hero-content">

          <span className="contact-eyebrow">
            LET'S CONNECT
          </span>

          <h1>
            Let's Create
            <br />
            <strong>Your Space.</strong>
          </h1>

          <p>
            Have a wardrobe or interior project in mind?
            Tell us about your space and let's turn your
            ideas into a thoughtfully designed reality.
          </p>

        </div>

        <div className="contact-hero-number">
          05 / CONTACT
        </div>

      </section>


      {/* =====================================
            CONTACT INTRO
      ===================================== */}

      <section className="contact-main">

        <div className="contact-info">

          <span className="contact-section-label">
            GET IN TOUCH
          </span>

          <h2>
            Start with
            <br />
            <strong>a conversation.</strong>
          </h2>

          <p>
            Whether you are planning a new wardrobe,
            upgrading your bedroom or creating a complete
            interior, our team is here to understand your
            requirements.
          </p>


          {/* CONTACT DETAILS */}

          <div className="contact-details">


            <div className="contact-detail">

              <span className="detail-label">
                PHONE
              </span>

              <a href="tel:+919000000000">
                +91 90000 00000
              </a>

            </div>


            <div className="contact-detail">

              <span className="detail-label">
                EMAIL
              </span>

              <a href="mailto:hello@kalasindustries.com">
                hello@kalasindustries.com
              </a>

            </div>


            <div className="contact-detail">

              <span className="detail-label">
                LOCATION
              </span>

              <p>
                Chennai, Tamil Nadu
              </p>

            </div>


            <div className="contact-detail">

              <span className="detail-label">
                WORKING HOURS
              </span>

              <p>
                Monday – Saturday
                <br />
                9:30 AM – 6:30 PM
              </p>

            </div>

          </div>

        </div>


        {/* =====================================
              CONTACT FORM
        ===================================== */}

        <div className="contact-form-wrapper">

          <div className="form-heading">

            <span>
              BOOK A CONSULTATION
            </span>

            <h3>
              Tell us about
              <br />
              your project.
            </h3>

          </div>


          <form onSubmit={handleSubmit}>


            {/* NAME */}

            <div className="form-group">

              <label>
                YOUR NAME
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label>
                PHONE NUMBER
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                EMAIL ADDRESS
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            {/* SPACE */}

            <div className="form-group">

              <label>
                WHAT ARE YOU LOOKING FOR?
              </label>

              <select
                name="space"
                value={formData.space}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select a requirement
                </option>

                <option value="Sliding Wardrobe">
                  Sliding Wardrobe
                </option>

                <option value="Openable Wardrobe">
                  Openable Wardrobe
                </option>

                <option value="Walk-in Wardrobe">
                  Walk-in Wardrobe
                </option>

                <option value="Complete Interior">
                  Complete Interior
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label>
                TELL US MORE
              </label>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your space..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="contact-submit"
            >
              Send Enquiry
              <span>→</span>
            </button>


          </form>

        </div>

      </section>


      {/* =====================================
            EXPERIENCE CENTRE
      ===================================== */}

      <section className="contact-centre">

        <div className="centre-content">

          <span>
            EXPERIENCE CENTRE
          </span>

          <h2>
            See. Touch.
            <br />
            <strong>Experience.</strong>
          </h2>

          <p>
            Visit our experience centre to explore
            finishes, materials, wardrobe systems and
            design possibilities in person.
          </p>

          <button>
            Visit Our Experience Centre →
          </button>

        </div>


        <div className="centre-number">
          06
        </div>

      </section>


      {/* =====================================
            FINAL CTA
      ===================================== */}

      <section className="contact-final">

        <span>
          KALA'S INDUSTRIES
        </span>

        <h2>
          Your space is waiting
          <br />
          <strong>to be designed.</strong>
        </h2>

        <p>
          Let's make it happen.
        </p>

      </section>


    </div>

  );
};

export default Contact;