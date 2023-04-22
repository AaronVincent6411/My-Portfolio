import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      from: `${name} <${email}>`,
      to: 'aaronvincent6411@gmail.com',
      subject: 'New message from your website',
      text: message,
    };

    axios({
      method: 'post',
      url: 'https://api.mailgun.net/v3/https://app.mailgun.com/app/sending/domains/sandboxd31f4e7da4374123bbd2f71e3afbb478.mailgun.org/messages',
      auth: {
        username: 'api',
        password: '181449aa-1b8f7c44',
      },
      data,
    })
      .then((response) => {
        console.log('Message sent:', response.data);
        alert('Thank you for your message! We will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
      });
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label className='name'>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label className='email'>
        Email:
        <input type="emailid" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
