import React, {useState} from "react";

const Feedback = () => {

const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    uploadedFiles: [],
    buttonText: 'Submit',
    uploadPhotosButtonText: 'Uploaded files'
})

const {name, email, message, phone, uploadedFiles, buttonText, uploadPhotosButtonText} = values;



  return (
    <div>
      <h2>Feedback Form</h2>
    </div>
  );
};

export default Feedback;
