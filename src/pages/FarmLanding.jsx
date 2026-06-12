import "./FarmLanding.css";

const galleryImages = [
  "/images/image1.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
];

const branches = [
  "الروضة",
  "القيروان",
  "الملقا",
  "الصحافة",
  "المحمدية",
  "النخيل",
  "عرقة",
  "المهدية",
  "السويدي",
  "الغاط",
];

export default function FarmLanding() {
  return (
    <main className="farm-page" dir="rtl">
      <section className="farm-hero" id="home">
        <nav className="farm-nav">
          <img src="/logo.png" alt="KAIF Logo" className="farm-logo" />

          <div className="farm-nav-links">
            <a href="#experience">التجربة</a>
            <a href="#details">التفاصيل</a>
            <a href="#gallery">الصور</a>
            <a href="#booking">الحجوزات</a>
          </div>
        </nav>

        <div className="farm-hero-content">
          <p className="farm-eyebrow">تجربة مختلفة في قلب الرياض</p>

          <h1>كايف المزرعة</h1>

          <p className="farm-hero-text">
            كايف المزرعة تجربة مختلفة في قلب الرياض، تجمع بين هدوء الطبيعة
            والأجواء العصرية داخل مساحة صُممت للهروب من صخب المدينة والاستمتاع
            باللحظة.
          </p>

          <div className="farm-hero-actions">
            <a href="#booking" className="farm-btn farm-btn-primary">
              احجز تجربتك
            </a>
            <a href="#details" className="farm-btn farm-btn-outline">
              اكتشف التفاصيل
            </a>
          </div>
        </div>
      </section>

      <section className="farm-section farm-intro" id="experience">
        <div className="farm-section-title">
          <p>عن التجربة</p>
          <h2>هدوء الطبيعة مع تفاصيل كايف العصرية</h2>
        </div>

        <p className="farm-large-text">
          يجمع المكان بين “كايف” و “أشقر”، ويقدم خيارات متنوعة من الآيس تي،
          والقهوة السعودية، والقهوة المختصة، بالإضافة إلى النابولي بيتزا، وتشيز
          كيك الكرك، وخيارات أخرى صُممت لتناسب مختلف الأوقات والمزاجات.
        </p>
      </section>

      <section className="farm-section farm-details" id="details">
        <div className="farm-section-title center">
          <p>تفاصيل التجربة</p>
          <h2>ثلاث تجارب داخل مكان واحد</h2>
        </div>

        <div className="farm-cards">
          <article className="farm-card">
            <span>01</span>
            <h3>غرفة سِجة الزجاجية</h3>
            <p>
              مساحة هادئة صُممت للتأمل والاسترخاء وسط أجواء زجاجية مفتوحة على
              الطبيعة.
            </p>
          </article>

          <article className="farm-card">
            <span>02</span>
            <h3>درب النخيل</h3>
            <p>
              مسار للمشي بين النخيل وعلى الأحجار يقود الزوار إلى المعرض الفني،
              بمشاركة نخبة من الفنانين التشكيليين.
            </p>
          </article>

          <article className="farm-card">
            <span>03</span>
            <h3>عين زرقاء اليمامة</h3>
            <p>
              تجربة ليلية فريدة تتيح للزوار مشاهدة تفاصيل القمر عبر التلسكوب في
              أجواء هادئة ومختلفة.
            </p>
          </article>
        </div>
      </section>

      <section className="farm-gallery" id="gallery">
        <div className="farm-section-title center">
          <p>الصور</p>
          <h2>لمحات من كايف المزرعة</h2>
        </div>

        <div className="farm-gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="farm-gallery-item" key={index}>
              <img src={image} alt={`كايف المزرعة ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="farm-booking" id="booking">
        <div>
          <p className="farm-eyebrow dark">الحجوزات</p>
          <h2>احجز تجربتك عبر المنصات التالية</h2>
        </div>

        <div className="farm-booking-buttons">
          <a href="#" className="farm-booking-btn">
            ذا شفز
          </a>
          <a href="#" className="farm-booking-btn">
            وي بوك
          </a>
          <a href="#" className="farm-booking-btn">
            ماي تيبل
          </a>
        </div>
      </section>

      <section className="farm-section farm-branches">
        <div className="farm-section-title center">
          <p>وين تلقى كايف؟</p>
          <h2>متواجدين بعشرة فروع في منطقة الرياض</h2>
        </div>

        <div className="farm-branch-list">
          {branches.map((branch) => (
            <span key={branch}>{branch}</span>
          ))}
        </div>
      </section>

      <footer className="farm-footer">
        <img src="/logo.png" alt="KAIF Logo" />

        <p>تابعونا في منصات التواصل الاجتماعي</p>

        <div className="farm-social">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">X</a>
          <a href="#">Whatsapp</a>
        </div>
      </footer>
    </main>
  );
}
