import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import './contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_jg9ipdp';
      const templateId = 'template_2oltgdq';
      const publicKey = 'gbv3IiEHAEBlRs8Id';
      const templateParams = {
        name,
        email,
        message
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(response => console.log(response))
        .then(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  }
  return (
    <div class="contactSection" id="contact" aria-label="contact">
      <div class="container">

        <div class="wrapper">
          <p class="section-subtitle">KONTAKT</p>
          <h2 class="h2 section-title has-underline">
            Schreiben Sie uns etwas
            <span class="span has-before"></span>
          </h2>
          <form action="" class="contact-form">
            <input type="text" name="name" placeholder="Ihren Namen" required class="input-field" value={name} onChange={e => setName(e.target.value)} />

            <input type="email" name="email_address" placeholder="Ihre E-Mail-Adresse" required class="input-field" value={email} onChange={e => setEmail(e.target.value)} />

            <textarea name="message" placeholder="Ihre Nachricht" class="input-field" value={message} onChange={e => setMessage(e.target.value)}></textarea>

            <button type="submit" class="submitButton" onClick={submit} >jetzt senden</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;