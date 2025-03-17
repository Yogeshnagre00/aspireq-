import "./services.css"; // External CSS
import Navbar from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import servicesData from "../../servicedata/servicesData";
import {
  // FaClinicMedical,
  //  FaMoneyCheckAlt,
  FaUniversity,
  //FaFileContract,
  FaShoppingCart,
  FaHospital,
  FaMoneyBillWave,
  FaShieldAlt,
  FaPlus,
} from "react-icons/fa";

import { useState, useEffect } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const fullText =
    "We provide specialized solutions in various industries, ensuring excellence and growth in Healthcare, Finance, Banking, Insurance, and E-commerce.";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="main-section">
          <div className="overlay"></div>
          <div className="hero-content">
            <h2>Our Services</h2>
            <p>{text}</p>
          </div>
        </section>
        {/* What We Do Section */}
        <section className="services-container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={`service-card ${
                  selectedService?.id === service.id ? "active" : ""
                }`}
                onClick={() => setSelectedService(service)}
              >
                {service.icon}
                <h3>{service.name}</h3>
              </div>
            ))}
          </div>

          {/* Display Selected Service Details */}
          {selectedService && (
            <div className="service-details">{selectedService.details}</div>
          )}
        </section>
        {/* We Build Usable Solutions */}
        <section className="service-categories">
          <h2>We Build Usable Solutions</h2>

          <div className="categories-grid">
            <div className="category">
              <h3>
                <FaHospital /> Healthcare
              </h3>
              <ul>
                <li>
                  <FaPlus className="plus-icon" /> Telemedicine Solutions
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Electronic Health Records
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Healthcare Analytics
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Appointment Management
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Pharmacy Management
                </li>
              </ul>
            </div>

            <div className="category">
              <h3>
                <FaMoneyBillWave /> Finance
              </h3>
              <ul>
                <li>
                  <FaPlus className="plus-icon" /> Investment Platforms
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Expense Tracking
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Tax Management
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Wealth Advisory
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Fraud Detection Systems
                </li>
              </ul>
            </div>

            <div className="category">
              <h3>
                <FaUniversity /> Banking
              </h3>
              <ul>
                <li>
                  <FaPlus className="plus-icon" /> Online Banking Solutions
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Loan Management
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Fraud Prevention
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Payment Gateways
                </li>
                <li>
                  <FaPlus className="plus-icon" /> ATM Software Integration
                </li>
              </ul>
            </div>

            <div className="category">
              <h3>
                <FaShieldAlt /> Insurance
              </h3>
              <ul>
                <li>
                  <FaPlus className="plus-icon" /> Policy Management Systems
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Claims Processing
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Risk Assessment Tools
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Underwriting Automation
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Customer Portals
                </li>
              </ul>
            </div>

            <div className="category">
              <h3>
                <FaShoppingCart /> E-commerce
              </h3>
              <ul>
                <li>
                  <FaPlus className="plus-icon" /> Online Storefronts
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Order Fulfillment
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Customer Personalization
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Payment Processing
                </li>
                <li>
                  <FaPlus className="plus-icon" /> Inventory Management
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="contactUs">
          <div className="contact-container">
            <div className="contact-details">
              <h2>Contact Us</h2>
              <p>ANY QUESTIONS OR REMARKS? JUST WRITE US A MESSAGE!</p>

              <div className="contact-location">
                <h3>Sydney</h3>
                <p>45 Pirrama Rd, Pyrmont NSW 2022</p>
              </div>
              <div className="contact-location">
                <h3>Melbourne</h3>
                <p>163 Collins St, Melbourne VIC 3000</p>
              </div>
              <div className="contact-location">
                <h3>Los Angeles</h3>
                <p>340 Main St, Venice CA 902291, USA</p>
              </div>
            </div>

            <div className="contactus">
              <h2>Get in Touch</h2>
              <p>
                Have an inquiry or some feedback for us? Fill out the form below
                to contact our team.
              </p>

              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your Name" />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter a valid email address"
                />

                <label htmlFor="message">How can we help?</label>
                <textarea id="message" placeholder=""></textarea>

                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Services;
