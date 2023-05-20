// import React, { useState } from 'react';
// import axios from 'axios';
// import './Form.css'


// function ContactForm() {
// // const mailgun = new Mailgun(formData);
// // const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'api_key'});

// // mg.messages.create('sandbox-123.mailgun.org', {
// // 	from: "Excited User <mailgun@sandbox-123.mailgun.org>",
// // 	to: ["aaronvincent6411@gmail.com"],
// // 	subject: "Hello",
// // 	text: "Testing some Mailgun awesomeness!",
// // 	html: "<h1>Testing some Mailgun awesomeness!</h1>"
// // })
// // .then(msg => console.log(msg)) // logs response data
// // .catch(err => console.log(err)); // logs any error
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = {
//       from: `${name} <${email}>`,
//       to: 'aaronvincent6411@gmail.com',
//       subject: 'New message from website',
//       text: message,
//     };

//     axios({
//       method: 'post',
//       url: '',
//       auth: {
//         username: 'api',
//         password: '',
//       },
//       data,
//     })
//       .then((response) => {
//         console.log('Message sent:', response.data);
//         alert('Thank you for your message! We will get back to you soon.');
//         setName('');
//         setEmail('');
//         setMessage('');
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         alert('Sorry, there was an error sending your message. Please try again later.');
//       });
//   };

//   // const mailgun = require("mailgun-js");
//   // const DOMAIN = "YOUR_DOMAIN_NAME";
//   // const mg = mailgun({ apiKey: 'process.env.MAILGUN_API_KEY', domain: DOMAIN });
  
//   // function submitForm(formData) {
//   //   const data = {
//   //     from: "Connect Me <connectme@YOUR_DOMAIN_NAME>",
//   //     to: "YOUR_EMAIL_ADDRESS",
//   //     subject: "New Connect Me Submission",
//   //     html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`
//   //   };
  
//   //   mg.messages().send(data, function(error, body) {
//   //     console.log(body);
//   //   });
//   // }

// //   const API_KEY = '';
// // const DOMAIN = '';

// // const mailgun = new Mailgun(formData);
// // const client = mailgun.client({username: 'api', key: API_KEY});

// // const messageData = {
// //   from: 'Excited User <me@samples.mailgun.org>',
// //   to: 'aaronvincent6411@gmail.com',
// //   subject: 'Hello',
// //   text: 'New Message'
// // };

// // client.messages.create(DOMAIN, messageData)
// //  .then((res) => {
// //    console.log(res);
// //  })
// //  .catch((err) => {
// //    console.error(err);
// //  });
  

//   return (
//     // <form className='contact-form' onSubmit={handleSubmit}>
//     //   <label className='name'>
//     //     Name:
//     //     <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
//     //   </label>
//     //   <label className='email'>
//     //     Email:
//     //     <input type="emailid" value={email} onChange={(event) => setEmail(event.target.value)} />
//     //   </label>
//     //   <label>
//     //     Message:
//     //     <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
//     //   </label>
//     //   <button type="submit">Send</button>
//     // </form>
// //     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScdEAFO7Twc5NjvNCYezG2HYPGU6g3abXV2sIjh0T7pZ_AZNQ/viewform?embedded=true" 
// //   width="500" 
// //   height="600" 
// //   frameborder="0" 
// //   marginheight="0" 
// //   marginwidth="0">
// //   Loading…
// // </iframe>
// <div className='form-rectangle-1'>
//   <h3>
//     Gmail 
//   </h3>
// </div>


//   );
// }

// export default ContactForm;

import React, { useState } from 'react';
import './Form.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    console.log('Submitted Form Data:', { name, email, message });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className="contact-section">
      <div className="contact-form">
        <form onSubmit={handleSubmit} action="/send-email">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
