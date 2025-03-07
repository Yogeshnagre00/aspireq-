import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/notFound";

const AboutUs = React.lazy(() => import("./Pages/AboutUs/aboutus.jsx"));

const Services = React.lazy(() => import("./Pages/ServicesPage/services"));

const BlogsCaseStudies = React.lazy(() =>
  import("./Pages/Blogs&CaseStudies/blogsCaseStudies")
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogscasestudies" element={<BlogsCaseStudies />} />
          <Route path="/aboutus" element={<AboutUs />} />
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
