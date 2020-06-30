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

  const handleChange = () => {
    console.log("handle change");
  };

  const handleSubmit = () => {
    console.log("handle submits");
  };

  const FeedbackForm = () => (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea
            onChange={handleChange}
            type="text"
            className="form-control"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label className="text-muted">Your Name</label>
          <input type="text" onChange={handleChange("name")} />
        </div>
      </form>
    </>
  );

  return (
    <div>
      <h2>Feedback App</h2>
    </div>
  );
};

export default Feedback;
