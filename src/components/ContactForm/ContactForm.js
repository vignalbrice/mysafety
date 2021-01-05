import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const onChangeData = (e) => {
    const newState = { ...data };
    newState[e.target.name] = e.target.value;
    setData(newState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div class="wrapper">
      <form onSubmit={onSubmit}>
        <div class="title"></div>
        <div class="name-wrapper">
          <input
            type="text"
            name="firstName"
            placeholder="Votre Nom"
            value={data.firstName}
            onChange={(e) => onChangeData(e)}
            autoFocus
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Votre Prénom"
            value={data.lastName}
            autoFocus
            onChange={(e) => onChangeData(e)}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Votre Email"
          value={data.email}
          autoFocus
          onChange={(e) => onChangeData(e)}
          required
        />
        <textarea
          name="message"
          form="cform"
          placeholder="Votre petit message à nous transmettre..."
          value={data.message}
          onChange={(e) => onChangeData(e)}
          required
        ></textarea>
        <button id="submit" name="submit" type="submit"></button>
      </form>
    </div>
  );
};

export default ContactForm;
