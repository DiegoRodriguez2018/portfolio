import React from "react";
import { Helmet } from "react-helmet";

export default () => (
  <Helmet>
    <meta charSet="utf-8" />

    {/* <!-- Fonts --> */}
    <link
      href="https://fonts.googleapis.com/css?family=Cinzel"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Raleway"
      rel="stylesheet"
    />

    {/* <!-- Font awesome stylesheets for icons. --> */}
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.3.1/css/brands.css"
      integrity="sha384-rf1bqOAj3+pw6NqYrtaE1/4Se2NBwkIfeYbsFdtiR6TQz0acWiwJbv1IM/Nt/ite"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css"
      integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7"
      crossorigin="anonymous"
    />

    {/* <!-- Devicons icons --> */}
    <link
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      rel="stylesheet"
    />
    <title>Diego Rodriguez</title>
  </Helmet>
);
