import "./WhoWeAre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function WhoWeAre() {
  return (
    <div className="who-container">
      <div className="who-left">
        <img
          src="/images/image1.jpg"
          alt="KAIF Founder"
          className="who-image"
        />
      </div>

      <div className="who-right">
        <div className="who-text">
          <h4 className="sub-heading">READ THE KAIF STORY</h4>
          <h2 className="main-heading">Inspiring the Love of Tea</h2>
          <p>
            At KAIF, we blend tradition with sophistication to create unforgettable moments.
            Our cafe is more than just a place to enjoy premium tea—it's a haven where excellence meets artistry.
          </p>
          <p>
            Every cup we serve tells a story of passion, precision, and dedication to the finest details.
            Learn how we stay true to those values in everything we do.
          </p>
          <a href="/more.pdf" className="learn-button" target="_blank">
            LEARN MORE
          </a>
        </div>

        <div className="who-social">
          <p>FOLLOW US!</p>
          <div className="icons">
            <a
              href="https://instagram.com/kaif_ksa"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com/kaif_ksa"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="mailto:Kaif.ksa2@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://tiktok.com/@kaif_ksa"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
