import { useParams } from "react-router-dom";

export const BlogDetails = () => {
  const { id } = useParams();

  // Here you can fetch blog data based on id if necessary
  return (
    <div>
      <h1>Blog Details for Blog ID: {id}</h1>
      <p>Here you can show more detailed information about the blog post.</p>
    </div>
  );
};

export const CaseStudyDetails = () => {
  const { id } = useParams(
    
  );
 

  // Fetch case study data based on id if necessary
  return (
    <div>
      <h1>Case Study Details for Case Study ID: {id}</h1>
      <p>Here you can show more detailed information about the case study.</p>
    </div>
  );
};
