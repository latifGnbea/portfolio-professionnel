import React, { useState } from "react";
import "./presentation.css";

const Presentation = ({
  title,
  description,
  imageUrl,
  githubLink,
  liveDemoLink,
  tags
}) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleToggle = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <i>{tags}</i>
      <p
        className={`project-description${
          isDescriptionExpanded ? '-expanded' : ''
        }`}
        onClick={handleToggle}
      >
        {description}
      </p>

      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {liveDemoLink && (
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Presentation;
