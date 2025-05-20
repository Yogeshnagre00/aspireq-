import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CookieConsent from "./components/Cookies/CookieConsent.jsx";
import NotFound from "./components/notFound";
import ApplyForm from "./Pages/careerPage/ApplyForm.jsx";

const AboutUs = React.lazy(() => import("./Pages/AboutUs/aboutus.jsx"));

const Services = React.lazy(() => import("./Pages/ServicesPage/services"));

const BlogsCaseStudies = React.lazy(() =>
  import("./Pages/Blogs&CaseStudies/blogsCaseStudies")
);
const CareerPage = React.lazy(() =>
  import("./Pages/careerPage/CareerPage.jsx")
);
const PrivacyPolicy = React.lazy(() =>
  import("./components/PrivacyPolicy/privacyPolicy")
);

const CookiesPolicy = React.lazy(() =>
  import("./components/CookiesPolicy/cookiesPolicy")
);
const ContactForm = React.lazy(() => import("./Pages/ContactUs/contactUs"));
const Home = React.lazy(() => import("./Pages/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogscasestudies" element={<BlogsCaseStudies />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/cookiespolicy" element={<CookiesPolicy />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
