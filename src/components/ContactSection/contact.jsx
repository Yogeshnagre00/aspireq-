import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./contact.css";

export const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state
  const location = useLocation();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim()) {
      const emailToSend = {
        Email: email,
      };
      setIsSubmitting(true);

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwmakg-xSlMoRiW-n_10BChKkHvsWBVLDnfxaJjPVE5QPfuIEat2YsQxR5YZORYG2k-rw/exec?action=emailconsultation",
          {
            redirect: "follow",
            method: "POST",
            headers: {
              "Content-Type": "text/plain; charset-utf-8",
            },
            body: JSON.stringify(emailToSend),
          }
        );

        const responseData = await response.json();

        if (response.ok) {
          // console.log("Email submitted:", email);
          alert("Thank you! Your email has been submitted.");
          setEmail("");
        } else {
          console.error("Error from server:", responseData);
          alert("There was an error submitting your email. Please try again.");
        }
      } catch (error) {
        console.error("Error during submission:", error);
        alert(
          "An error occurred while submitting your email. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
            {!isSubmitting && <span>&#10132;</span>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
