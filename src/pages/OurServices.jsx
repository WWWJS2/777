import "./OurServices.css";

export default function OurServices() {
  const galleryImages = [
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
  ];

  return (
    <div className="services-container">
      {/* Hero with background image */}
      <section className="hero-section-with-image">
        <div className="hero-overlay">
          <h1>Discover the Story of the Drink of the Greats</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="services-intro">
        <div className="intro-content">
          <div className="intro-text">
            <h2>More Than Just Tea</h2>
            <p>
              At KAIF, we take our guests on a distinctive journey through the world of tea. 
              Every cup represents relaxation, flavor, and refined craftsmanship.
            </p>
          </div>
          <img src="/images/image4.jpg" alt="Tea Cup" className="intro-image" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="services-columns">
        <div className="column">
          <h3>Our Vision</h3>
          <p>
            To create a joyful journey with every cup. We aim to be the destination of choice for tea lovers through a unique experience.
          </p>
        </div>
        <div className="column">
          <h3>Our Mission</h3>
          <p>
            We are committed to delivering the finest tea in creative and modern ways, 
            with a strong focus on product quality and service excellence.
          </p>
        </div>
      </section>

      {/* Why KAIF */}
      <section className="why-kaif-section">
  <h2>Why KAIF Tea?</h2>

  {/* First row: 3 cards */}
  <div className="why-kaif-grid">
    <div className="card">
      <h4>Flexibility</h4>
      <p>
        We meet our customers’ needs anytime, executing orders precisely and reliably.
      </p>
    </div>
    <div className="card">
      <h4>Total Quality</h4>
      <p>
        We serve only the finest drinks, fresh flavors, and pastries — with attention to hospitality and presentation.
      </p>
    </div>
    <div className="card">
      <h4>Customer Care</h4>
      <p>
        We stay close to our customers, listening to feedback and constantly improving.
        Customer satisfaction is our top priority.
      </p>
    </div>
  </div>

  {/* Second row: 1 card centered */}
  <div className="why-kaif-grid single-card-center">
    <div className="card">
      <h4>Competitive Pricing</h4>
      <p>
        Our prices are competitive and accessible for all — always reflecting premium quality and memorable service.
      </p>
    </div>
  </div>
</section>


      {/* Gallery */}
      <section className="gallery-section">
        <h2>Inside KAIF</h2>
        <p>Enjoy a visual experience of our space, people, and community.</p>
        <div className="gallery">
          {galleryImages.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="services-extras">
        <h2>What We Offer</h2>
        <ul>
          <li>Signature hot & cold tea blends</li>
          <li>Fresh-baked pastries and savories</li>
          <li>Branded 1L / 2L beverage carafes</li>
          <li>Custom printed cups and bottles</li>
          <li>Catering for private and public events</li>
          <li>Partnerships with corporate and retail clients</li>
        </ul>
      </section>

      {/* Contact */}
      <footer className="services-footer">
        <p>For more information or inquiries:</p>
        <p><strong>Email:</strong> Sales@kaief.sa</p>
        <p><strong>Phone:</strong> 055 134 54 35</p>
      </footer>
    </div>
  );
}
