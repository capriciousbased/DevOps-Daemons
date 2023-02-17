import React from 'react'
import "./contact.css";
const Contact = () => {
  return (
    <div className="section contact" id="contact" aria-label="contact">
        <div className="container">
          <p className="section-subtitle">KONTAKT</p>

          <h2 className="h2 section-title has-underline">
            Schreiben Sie uns etwas
            <span className="span has-before"></span>
          </h2>

          <div className="wrapper">
            <form action="" className="contact-form">
              <input type="text" name="name" placeholder="Ihren Namen" required className="input-field" />

              <input type="email" name="email_address" placeholder="Ihre E-Mail-Adresse" required className="input-field" />

              <input type="text" name="subject" placeholder="Thema" required className="input-field" />

              <textarea name="message" placeholder="Ihre Nachricht" className="input-field"></textarea>

              <button type="submit" className="btn btn-primary">jetzt senden</button>
            </form>

            <ul className="contact-card">
              <li>
                <p className="card-title">Address:</p>

                <address className="address">
                  123, straße <br />
                  Berlin, Deutschland
                </address>
              </li>

              <li>
                <p className="card-title">Phone:</p>

                <a href="tel:1234567890" className="card-link">123 456 7890</a>
              </li>

              <li>
                <p className="card-title">Email:</p>

                <a href="mailto:support@support.com" className="card-link">contact@devopsaemons.devops2022.de</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
  )
}

export default Contact