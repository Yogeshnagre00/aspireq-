import { useEffect, useState } from "react";
import ContactSection from "../../components/ContactSection/contact";
import FAQSection from "../../components/FAQSection/faqSection";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import "./blogsCaseStudies.css";
import { BlogCard, CaseStudyCard } from "./card";
import { blogData, caseStudyData } from "../../data/blog&CaseStudiesData";

const BlogsCaseStudies = () => {
  const [activeTab, setActiveTab] = useState(""); // empty means show all by default
  const [shuffledData, setShuffledData] = useState([]);

  // Shuffle logic
  useEffect(() => {
    const combined = [
      ...blogData.map((item) => ({ ...item, type: "Blog" })),
      ...caseStudyData.map((item) => ({ ...item, type: "Case Studies" })),
    ];
    const shuffled = combined.sort(() => Math.random() - 0.5);
    setShuffledData(shuffled);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div className="blogs-case-studies">
        <div className="tabs">
          {/* Left Rounded - Blogs */}
          <button
            className={`tab-button ${activeTab === "Blogs" ? "active" : ""}`}
            onClick={() => handleTabChange("Blogs")}
          >
            Blogs
          </button>

          {/* Right Rounded - Case Studies */}
          <button
            className={`tab-button1 ${activeTab === "Case Studies" ? "active" : ""}`}
            onClick={() => handleTabChange("Case Studies")}
          >
            Case Studies
          </button>
        </div>

        <div className="content grid">
          {/* Show All by default with random order */}
          {activeTab === "" &&
            shuffledData.map((item) =>
              item.type === "Blog" ? (
                <BlogCard key={`blog-${item.id}`} {...item} />
              ) : (
                <CaseStudyCard key={`case-${item.id}`} {...item} />
              )
            )}

          {/* Show only Blogs */}
          {activeTab === "Blogs" &&
            blogData.map((item) => <BlogCard key={`blog-${item.id}`} {...item} />)}

          {/* Show only Case Studies */}
          {activeTab === "Case Studies" &&
            caseStudyData.map((item) => <CaseStudyCard key={`case-${item.id}`} {...item} />)}
        </div>
      </div>

      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default BlogsCaseStudies;


// import { useState } from "react";
// import ContactSection from "../../components/ContactSection/contact";
// import FAQSection from "../../components/FAQSection/faqSection";
// import { Footer } from "../../components/Footer/footer";
// import Navbar from "../../components/Header/header";
// import "./blogsCaseStudies.css";
// import { BlogCard, CaseStudyCard } from "./card";
// import { blogData, caseStudyData } from "../../data/blog&CaseStudiesData";

// const BlogsCaseStudies = () => {
//   const [activeTab, setActiveTab] = useState(""); // empty means show all by default

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="blogs-case-studies">
//         <div className="tabs">
//           {/* Left Rounded - Blogs */}
//           <button
//             className={`tab-button ${activeTab === "Blogs" ? "active" : ""}`}
//             onClick={() => handleTabChange("Blogs")}
//           >
//             Blogs
//           </button>

//           {/* Right Rounded - Case Studies */}
//           <button
//             className={`tab-button1 ${
//               activeTab === "Case Studies" ? "active" : ""
//             }`}
//             onClick={() => handleTabChange("Case Studies")}
//           >
//             Case Studies
//           </button>
//         </div>

//         <div className="content grid">
//           {/* Show All by default */}
//           {activeTab === "" && (
//             <>
//               {blogData.map((item) => (
//                 <BlogCard key={`blog-${item.id}`} {...item} />
//               ))}
//               {caseStudyData.map((item) => (
//                 <CaseStudyCard key={`case-${item.id}`} {...item} />
//               ))}
//             </>
//           )}

//           {/* Show only Blogs */}
//           {activeTab === "Blogs" &&
//             blogData.map((item) => (
//               <BlogCard key={`blog-${item.id}`} {...item} />
//             ))}

//           {/* Show only Case Studies */}
//           {activeTab === "Case Studies" &&
//             caseStudyData.map((item) => (
//               <CaseStudyCard key={`case-${item.id}`} {...item} />
//             ))}
//         </div>
//       </div>

//       <FAQSection />
//       <ContactSection />
//       <Footer />
//     </>
//   );
// };

// export default BlogsCaseStudies;
