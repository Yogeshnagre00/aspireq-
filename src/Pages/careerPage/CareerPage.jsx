import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import "./career.css";
const benefits = [
  {
    icon: "🏢",
    title: "Large Beautiful Office",
    description:
      "Enjoy a comfortable office environment in a modern and stylish setting.",
  },
  {
    icon: "🤝",
    title: "Great Co-Workers",
    description:
      "Work with some of the best talent in the industry and build strong relationships.",
  },
  {
    icon: "📍",
    title: "Easy Location",
    description: "Conveniently located with access to public transportation.",
  },
  {
    icon: "🎓",
    title: "Education Opportunity",
    description:
      "Gain access to training and education to further your knowledge.",
  },
  {
    icon: "🍱",
    title: "Free Lunch & Snacks",
    description: "Daily catered lunch and a variety of snacks and drinks.",
  },
  {
    icon: "🏆",
    title: "Performance Award",
    description: "Get recognized and rewarded for outstanding contributions.",
  },
];
const CareerPage = () => {
  const navigate = useNavigate();
  const jobSectionRef = useRef(null);

  const handleApplyClick = () => {
    navigate("/apply");
  };

  const scrollToJobs = () => {
    jobSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <div className="career-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Join Our Team At <br /> <span className="highlight">ASPIREQ</span>
            </h1>
            <p>Work at the most dynamic and successful Company</p>
            <button className="hero-btn" onClick={scrollToJobs}>
              View Openings
            </button>
          </div>
          <div className="hero-image">
            <img src="/Images/Illustrations/career page.png" alt="Team" />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="career-perks">
          <div className="perks-container">
            <div className="left-benefits">
              {benefits.map((item, index) => (
                <div className="benefit-card" key={index}>
                  <div className="icon-placeholder">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="right-description">
              <h2>
                Your Life At <span className="highlight">ASPIREQ</span>
              </h2>
              <p>
                At ASPIREQ, we believe in working together and working hard.
                With over 800 happy clients, we are always looking for dynamic
                and creative individuals to join our team.
              </p>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
        </section>
        {/* Company Culture Section */}
        <section className="culture">
          <h2>
            Your Life At <span className="highlight">ASPIREQ</span>
          </h2>
          <p>
            At ASPIREQ, we believe in working together and working hard. With
            over 800 happy clients, we are always looking for dynamic and
            creative individuals to join our team.
          </p>
          <button className="learn-btn">Learn More</button>
        </section>

        {/* Job Openings Section */}
        <section className="jobs" ref={jobSectionRef}>
          <h2>Job Openings</h2>
          <div className="job-listings">
            {[
              {
                title: "UI/UX Designer",
                type: "Internship",
                location: "Pune",
              },
              {
                title: "Full Stack Developer",
                type: "Intership",
                location: "Pune",
              },
              {
                title: "Software Development Engineer in Testing",
                type: "Intership ",
                location: "Pune",
              },
            ].map((job, index) => (
              <div className="job-card" key={index}>
                <h4>{job.title}</h4>
                <span className="badge">{job.type}</span>
                <p>{job.location}</p>
                <button className="apply-btn" onClick={handleApplyClick}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="stat-card">
            <h3>3+</h3>
            <p>Clients</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Open Positions</p>
          </div>
          <div className="stat-card">
            <h3>3+</h3>
            <p>Users Worldwide</p>
          </div>
          <div className="stat-card">
            <h3>2</h3>
            <p>Active Members</p>
          </div>
        </section>

        {/* Recruitment Process Section */}
        <section className="process">
          <h2>
            Learn Our Recruitment <span className="highlight">Process</span>
          </h2>
          <div className="process-steps">
            {[
              "CV Submission",
              "Phone Screening",
              "Skill Assessment",
              "Final Interview",
            ].map((step, index) => (
              <div className="step-card" key={index}>
                <div className="step-icon">✔️</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
