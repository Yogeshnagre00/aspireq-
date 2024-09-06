import { useNavigate } from "react-router-dom";

import "./cookiesPolicy.css";

const CookiesPolicy = () => {
  const navigate = useNavigate();

  // Function to navigate back to the homepage
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="cookies-policy-container">
      <button
        onClick={handleBackToHome}
        className="back-to-home-button top-button"
      >
        Back
      </button>

      <h1>Cookies Policy</h1>

      <section className="content">
        <p>
          When you visit the Aspireq Sites, Aspireq uses a number of suppliers
          who may place cookies, tags, pixels, and similar tracking technologies
          (collectively, “Cookies”) on your device, browser, or the webpage you
          are viewing, in order to personalize your experience (e.g., language
          preferences), understand usage patterns, provide, improve, and secure
          the Aspireq Sites.
        </p>
        <h2>Types of Cookies We Use</h2>
        <h3>Absolutely Necessary Cookies</h3>
        <p>
          These Cookies are essential to enable you to move around Aspireq Sites
          and use its features. Without these Cookies, services you have asked
          for, like adding items to an online shopping cart, cannot be provided.
        </p>
        <h3>Performance Cookies</h3>
        <p>
          These Cookies collect information about how you use Aspireq Sites.
          Information collected includes, for example, browsers and operating
          systems used, domain name of the website previously visited, number of
          visits, average duration of visit, and pages viewed. These Cookies do
          not collect information that personally identifies you and considers
          aggregated data. Performance Cookies are used to improve the
          user-friendliness of a website and enhance your experience.
        </p>
        <h3>Functionality Cookies</h3>
        <p>
          These Cookies allow the website to remember choices you make (such as
          your username or ID, language preference, or the area or region you
          are in) and provide enhanced, more personal features.
        </p>
        <h3>Third-Party Cookies</h3>
        <p>
          Aspireq may also allow third-party service performance and retargeting
          Cookies, such as Google Analytics, Facebook Pixel, etc., to collect
          information about your online activities.
        </p>
      </section>
    </div>
  );
};

export default CookiesPolicy;
