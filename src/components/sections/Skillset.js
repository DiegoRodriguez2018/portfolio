import React from "react";
import iconClasses from "../../data/iconClasses";

export default function Skillset(props) {
  return (
    <section className="experience-section">
      <h3>Skillset </h3>
      <ul className="skillset">
        {/* Note we are adding the icon class as well. */}
        {Object.entries(iconClasses).map(([description, iconClass]) => {
          return (
            <li key={description}>
              <span className={iconClass + " icon"}></span>
              {description}
            </li>
          );
        })}
      </ul>
      <br />
      <p>
        I love coding and technology in general, and some of the areas I would
        like to expand in the future include; Data Science , Artificial
        Intelligence, Mobile Development and 3D Modelling.
      </p>

      <h3>Academic Background</h3>
      <ul className="education-list">
        <li> Diploma in Information Technology. Coder Academy 2018.</li>
        <li>
          Ms. Environmental Change Management. University of Technology, Sydney.
          2013.
        </li>
        <li>
          Bachelor in Mechanical Engineering. University of San Carlos. 2010.
        </li>
      </ul>
    </section>
  );
}
