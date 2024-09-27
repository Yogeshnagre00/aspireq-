import { useState } from "react";
import "./faqSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What can you help me with?",
      answer:
        "With whatever we can. Preparing cost analysis, establishing team roles, creating roadmaps. Defining business goals, key business values, target users, main features, prioritizing. We can find you similar projects that are already active on the market to benchmark against. We can assist you with creating user personas, mock-ups, user stories, time frame, establishing project status and preparing project estimation. We'll be happy to outline project specification, prepare wireframes, details concerning integrations with external services, API documentation, required features list.In terms of project development we prepare server-side architecture, front end, back end, graphic and UX design, and create back-office consoles. We are also happy to advise our customers in terms of budgeting, scheduling, risk management, and business model creation.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "Nope! Our software team will work as per your requirement. You will have total flexibility.",
    },
    {
      question: "What type of clients have you worked for?",
      answer:
        "We work with everyone from big companies to small start-ups to non-profits.",
    },
    {
      question: "Do you sign an NDA?",
      answer:
        "We sign a non-disclosure agreement (NDA) for protection of non-public information about the customers that is used in the project before receiving the system info or cost estimation.",
    },
    {
      question: "How soon can you start?",
      answer: "We can often start within days of receiving your request.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
