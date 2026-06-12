import "./Franchise.css";

export default function Franchise() {
  return (
    <div className="franchise-container">
      <div className="franchise-content">
        <div className="franchise-text">
          <h1>Become a KAIF Franchise Partner</h1>
          <p>
            At KAIF, we offer more than tea — we deliver an experience that blends tradition, innovation, and premium quality.
          </p>
          <p>
            We're now welcoming passionate entrepreneurs to join our growing family. If you believe in excellence, detail, and customer experience, we’d love to hear from you.
          </p>
          <a href="mailto:sales@kaief.sa" className="franchise-button">
            Request Franchise Info
          </a>
        </div>

        <div className="franchise-image">
          <img src="/images/image7.jpg" alt="KAIF Franchise" />
        </div>
      </div>
    </div>
  );
}
