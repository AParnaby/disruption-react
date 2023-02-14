import React, { useState } from "react";
import { TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl, Snackbar } from "@material-ui/core";

const reasons = [
  "Underling",
  "Rite",
  "Excursion/Audience",
  "Other",
];

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    reason: "",
    message: "",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { ...formState };
    postDataToDiscord(formData);
    setFormState({
      name: "",
      reason: "",
      message: "",
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Name"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Request Type</InputLabel>
            <Select
              required
              value={formState.reason}
              onChange={handleChange}
              displayEmpty
              name="reason"
            >
              <MenuItem value="">Request Type</MenuItem>
              {reasons.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
               ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Message"
            name="message"
            multiline
            minRows={4}
            value={formState.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        onClose={handleClose}
        message="Form submitted successfully"
        autoHideDuration={5000}
      />
    </form>
  );
};

const postDataToDiscord = async (data) => {
  console.log(process.env.REACT_APP_DISCORD_WEBHOOK_URL);
  const webhookURL = process.env.REACT_APP_DISCORD_WEBHOOK_URL;
  const message = `New form submission:\nName: ${data.name}\nReason: ${data.reason}\nDetails: ${data.message}`;
  const payload = {
    content: message,
  };
  const response = await fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    console.log("Message sent to Discord");
  } else {
    console.error("Failed to send message to Discord");
  }
};

export default Form;
