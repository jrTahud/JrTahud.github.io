import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>I'm actively looking for new opportunities and challenging projects. Feel free to reach out if you have any questions, project proposals, or collaboration ideas. I'm based in Navotas City and available for both remote and on-site work.</p>
          <div className="contact-methods">
            <div className="method">
              <span className="method-icon">📧</span>
              <a href="mailto:jr.tahud23@gmail.com">jr.tahud23@gmail.com</a>
            </div>
            <div className="method">
              <span className="method-icon">📧</span>
              <a href="mailto:jr_tahud@yahoo.com">jr_tahud@yahoo.com</a>
            </div>
            <div className="method">
              <span className="method-icon">📱</span>
              <a href="tel:09457700408">09457700408</a>
            </div>
            <div className="method">
              <span className="method-icon">📱</span>
              <a href="tel:09277269781">09277269781</a>
            </div>
            <div className="method">
              <span className="method-icon">📍</span>
              <span>Blk 39 e-lot 23, Dagat Dagatan, Navotas City</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/jhon-roquetahud-892839158" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://ph.jobstreet.com/profiles/jr-tahud-QnGcJpsj13" target="_blank" rel="noopener noreferrer">JobStreet</a>
            <a href="mailto:jr.tahud23@gmail.com" rel="noopener noreferrer">Email</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="How can I help?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}
