import React, { useState } from "react";

const Feedback = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    uploadedFiles: [],
    buttonText: "Submit",
    uploadPhotosButtonText: "Upload files",
  });

  const {
    name,
    email,
    message,
    phone,
    uploadPhotosButtonText,
    uploadedFiles,
    buttonText,
  } = values;

  const handleChange = name => e  => {
    setValues({ ...values, [name]: e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault()
    setValues({ ...values, buttonText: "...sending"});
    console.log({name, email, phone, message, uploadedFiles})
  };

  const FeedbackForm = () => (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea
            onChange={handleChange("message")}
            type="text"
            className="form-control"
            value={message}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label className="text-muted">Your Name</label>
          <input 
          className="form-control"
            type="text"
            onChange={handleChange("name")}
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Your Email</label>
          <input 
          className="form-control"
            type="email"
            onChange={handleChange("email")}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Your Phone</label>
          <input 
          className="form-control"
            type="number"
            onChange={handleChange("phone")}
            value={phone}
            required
          />
        </div>

        <button className="btn btn-outline-primary btn-block">{buttonText}</button>
      </form>
    </>
  );

  return (
    <div className="p-5">
      {FeedbackForm()}
    </div>
  );
};

export default Feedback;
