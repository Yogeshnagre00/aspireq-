import React, { Suspense, useState } from "react";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import "./contactUs.css";

const FAQSection = React.lazy(() =>
  import("../../components/FAQSection/faqSection")
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add state for modal message and visibility
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      FirstName: formData.firstName,
      LastName: formData.lastName,
      EmailID: formData.email,
      MobileNumber: formData.mobile,
      Message: formData.message,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwmakg-xSlMoRiW-n_10BChKkHvsWBVLDnfxaJjPVE5QPfuIEat2YsQxR5YZORYG2k-rw/exec?action=writecontactdetails",
        {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "text/plain; charset-utf-8",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        setModalMessage(
          "Thank you for reaching out to us, we will connect with you soon!"
        );
        setShowModal(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setModalMessage(
          "There was an error on the server side while submitting the form. Please try again."
        );
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage(
        `There was an error submitting the form: ${error.message}. Please try again.`
      );
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-form-container">
        <h1 className="contacth1">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
          vitae leo nunc.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type here."
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Modal for displaying messages */}
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content">
            <div className="custom-modal-header">Aspireq</div>
            <div className="custom-modal-message">{modalMessage}</div>
            <button
              className="custom-modal-button"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <FAQSection />
      </Suspense>
      <Footer />
    </>
  );
};

export default ContactForm;
