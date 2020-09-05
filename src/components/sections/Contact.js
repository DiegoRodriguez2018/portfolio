import React from "react";
import Form from "../Form";
import { Grid } from "@material-ui/core";

export default function Contact() {
  return (
    <section className="contact-section">
      <Grid container justify="center" direction="column">
        <Grid item>
          <h3>Contact</h3>
        </Grid>

        <Grid>
          <p>
            Would you like ask something or just have a chat? <br /> Please get
            in touch!
          </p>
          <br></br>
        </Grid>

        <Form />
      </Grid>
    </section>
  );
}
