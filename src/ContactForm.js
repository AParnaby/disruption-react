import React, { useState } from "react";
import { Button, TextField, MenuItem } from "@material-ui/core";

const reasons = [
  "Underling",
  "Excursion/Audience",
  "Rite",
  "Other",
];

const Form = () => {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = { name, details, reason };
    postDataToDiscord(formData);
    console.log(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        select
        label="Request Type"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      >
        <MenuItem value="" displayEmpty>
          <em>Request Type</em>
        </MenuItem>
        {reasons.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Details"
        variant="outlined"
        margin="normal"
        type="details"
        required
        fullWidth
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};

const postDataToDiscord = async (data) => {
  console.log(process.env.REACT_APP_DISCORD_WEBHOOK_URL);
  const webhookURL = process.env.REACT_APP_DISCORD_WEBHOOK_URL;
  const message = `New form submission:\nName: ${data.name}\nReason: ${data.reason}\nDetails: ${data.details}`;
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
