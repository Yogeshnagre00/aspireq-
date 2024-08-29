import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import "./contact.css";

export const ContactSection = () => {
  const [email, setEmail] = useState("");
  const location = useLocation(); // Get the current route

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Email submitted:", email);
      setEmail(""); // Clear input after submission
    } else {
      alert("Please enter a valid email address.");
    }
  };

  // Conditionally render the contact section only if not on the Contact Us page
  if (location.pathname === "/contactUs") {
    return null; // Don't render the section
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Get started with a free 30 minute consultation with an expert.</h1>
        <form className="inputWithButton" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={handleChange}
          />
          <button type="submit">
            Contact Us <span>&#10132;</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
