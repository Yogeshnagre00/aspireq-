import { useParams } from "react-router-dom";

export const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id); // Fetch blog by ID

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <img src={blog.imageSrc} alt={blog.title} />
      <p>{blog.description}</p>
      <div className="author-info">
        <img src={blog.authorImage} alt={blog.author} />
        <span>{blog.author}</span>
      </div>
      <p>{blog.date}</p>
    </div>
  );
};

export const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseStudy = caseStudyData.find((c) => c.id === id); // Fetch case study by ID

  if (!caseStudy) return <p>Case Study not found</p>;

  return (
    <div className="case-study-detail">
      <h1>{caseStudy.title}</h1>
      <img src={caseStudy.imageSrc} alt={caseStudy.title} />
      <p>{caseStudy.description}</p>
      <p>{caseStudy.date}</p>
    </div>
  );
};
