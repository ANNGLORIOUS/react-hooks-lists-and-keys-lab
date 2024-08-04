import React from 'react';

function ProjectItem({ title, description, technologies }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
