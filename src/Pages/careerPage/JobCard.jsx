import PropTypes from 'prop-types'; 

const JobCard = ({ title, location, type, description }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Type:</strong> {type}</p>
      <p>{description}</p>
      <button>Apply Now</button>
    </div>
  );
};

// ✅ Add PropTypes validation
JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default JobCard;
