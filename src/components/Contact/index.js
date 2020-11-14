import React from 'react';
// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';

function ContactForm() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//   const { name, email, message } = formState;
//   const [errorMessage, setErrorMessage] = useState('');

//   function handleChange(e) {
//     if (e.target.name === 'name') {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       console.log(isValid);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         if (!e.target.value.length) {
//           setErrorMessage(`${e.target.name} is required.`);
//         } else {
//           setErrorMessage('');
//         }
//       }
//     }
//     if (e.target.name === 'message') {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     }
//     console.log('errorMessage', errorMessage);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formState);
//   }

  return (
    <section className='contact-section'>
      <div>
        <h1>Contact me</h1>
        <h2>Phone: 908-229-2034</h2>
        <h2>Click to email:  <a href="mailto:jeffdmead171@gmail.com">jeffdmead171@gmai.com</a></h2>
      </div>
      {/* <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label className='label' htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            <button id="button" type="submit">Submit</button>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </form> */}
    </section>
  );
}

export default ContactForm;