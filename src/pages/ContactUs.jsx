import "./Contact.css";

export default function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Stay connected with KAIF through our social media or by email.</p>
      </div>

      <div className="contact-icons">
        <a href="https://wa.me/0508884838" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://twitter.com/kaif_ksa" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/kaif_ksa" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:Kaif.ksa2@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://tiktok.com/@kaif_ksa" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>

      <div className="contact-footer-info">
        <p>We're always happy to hear from you — whether it's feedback, partnership ideas, or just a hello!</p>
        <p>📧 Email: <a href="mailto:Kaif.ksa2@gmail.com">Kaif.ksa2@gmail.com</a></p>
      </div>
    </div>
  );
}
