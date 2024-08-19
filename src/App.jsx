import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ContactForm from "./Pages/ContactUs/contactUs";
import Home from "./Pages/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}
export default App;
