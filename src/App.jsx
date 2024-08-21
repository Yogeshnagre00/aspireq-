import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BlogsCaseStudies from "./Pages/Blogs&CaseStudies/blogsCaseStudies";
import ContactForm from "./Pages/ContactUs/contactUs";
import Home from "./Pages/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactForm />} />
        <Route path="/BlogsCaseStudies" element={<BlogsCaseStudies />} />
      </Routes>
    </Router>
  );
}
export default App;
