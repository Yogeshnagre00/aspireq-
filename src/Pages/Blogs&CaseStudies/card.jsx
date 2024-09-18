// BlogCard.js
import PropTypes from "prop-types";

export const BlogCard = ({
  id,
  imageSrc,
  tag,
  time,
  title,
  description,
  author,
  authorImage,
  date,
  onClick,
}) => (
  <div className="card" onClick={() => onClick(id)}>
    <img src={imageSrc} alt={title} />
    <div className="card-content">
      <div className="meta">
        <span className={`tag ${tag.toLowerCase().replace(" ", "-")}`}>
          {tag}
        </span>
        <span className="time"> &#9201;{time}</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="meta">
        <div className="author-info">
          <img src={authorImage} alt="" className="author-logo" />
          <span className="author-name">{author}</span>
        </div>
        <span className="date">{date}</span>
      </div>
    </div>
  </div>
);

BlogCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, 
};

// CaseStudyCard.js
export const CaseStudyCard = ({
  id,
  imageSrc,
  tag,
  time,
  title,
  description,
  date,
  onClick, // Add onClick prop
}) => (
  <div className="card" onClick={() => onClick(id)}>
    <img src={imageSrc} alt={title} loading="lazy" />
    <div className="card-content">
      <div className="meta">
        <span className={`tag ${tag.toLowerCase().replace(" ", "-")}`}>
          {tag}
        </span>
        <span className="time">&#9201;{time}</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="meta">
        <button className="read-more">Read More</button>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

CaseStudyCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Ensure onClick is required
};
