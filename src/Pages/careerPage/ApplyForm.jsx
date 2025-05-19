import { useState } from "react";
import "./applyForm.css";

const ApplyForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Optional: Integrate with email or Google Sheets
  };

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Why do you want to work with us?"
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplyForm;
