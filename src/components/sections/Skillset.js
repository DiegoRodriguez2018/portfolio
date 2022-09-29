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
              <span> {description} </span>
            </li>
          );
        })}
      </ul>
      <br />

      <h3>Academic Background</h3>
      <ul className="education-list">
        <li> Diploma in Information Technology. Coder Academy 2018.</li>
        <li>
          Master of Science - Environmental Change Management. <br/> University of Technology, Sydney.
          2013.
        </li>
        <li>
          Bachelor in Mechanical Engineering. University of San Carlos. 2010.
        </li>
      </ul>
    </section>
  );
}
