import React from "react";
import { Button } from "@material-ui/core";
export default ({ setIndex }) => {
  const sections = ["About", "My Skills", "Contact"];

  return (
    <nav className="navbar-section">
      <div className="navbar-options">
        {sections.map((section, i) => (
          <Button
            onClick={() => setIndex(i + 1)}
            variant="primary"
            size="small"
          >
            {section}
          </Button>
        ))}
      </div>
    </nav>
  );
};
