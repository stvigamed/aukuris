import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <h3 className="products-title" data-aos="fade-left">
        Contact us
      </h3>
      <div className="right-column">
        <div className="form-container">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
