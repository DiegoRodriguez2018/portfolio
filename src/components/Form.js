import React, { useState } from "react";
import { Grid, Button, InputLabel, Input, Box } from "@material-ui/core";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

// Note that the fields of the form need to match with the fields specified on the hidden form of index.html

export default () => {
  const initialState = { name: "", email: "", message: "" };

  const [state, setState] = useState(initialState);

  /* Here’s the juicy bit for posting the form submission */
  const handleSubmit = (e) => {
    console.log(e.target);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => {
        alert("Thanks for getting in touch, I will get back to you soon.");
        //Redirecting to home page.
        document.location.href = "/";
      })
      .catch((error) => alert(error));
    e.preventDefault();
  };

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <Grid container spacing={2} justify="center">
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >

        {/* honeypot field */}
        <input type="hidden" name="form-name" value="contact" />
        <label hidden>
          Don’t fill this out:
          <input name="bot-field" onChange={handleChange} />
        </label>
        {Object.entries(state).map(([name, value]) => (
          <Grid item>
            <InputLabel htmlFor="name">{name}</InputLabel>
            <Input
              id={name}
              name={name}
              value={value}
              aria-describedby={name}
              onChange={handleChange}
            />
          </Grid>
        ))}
        <div data-netlify-recaptcha="true"></div>

        <Grid item>
          <Box mt={2}>
            <Button variant="outlined" size="small" type="submit">
              Send
            </Button>
          </Box>
        </Grid>
      </form>
    </Grid>
  );
};
