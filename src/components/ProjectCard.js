import React from "react";
import iconClasses from "../data/iconClasses";

export default ({ project }) => {
  const { name, html_url, language } = project;

  return (
    <div className="project-card">
      <div className="row height-30">
        <div className="url-links">
          {html_url && (
            // eslint-disable-next-line
            <a
              className="github-link devicons devicons-github_badge"
              target="blank"
              href={html_url}
            />
          )}
        </div>
      </div>

      <div className="row height-30">
        <div className="tech-icons">
          <span className={iconClasses[language] + " icon"} />
        </div>
      </div>

      <div className="row height-30">
        <div className="project-name">{name}</div>
      </div>
    </div>
  );
};
