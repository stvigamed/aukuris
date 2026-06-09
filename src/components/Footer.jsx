export default function Footer() {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-delay="400">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-info__text">
            <a href="tel:++48513416750" className="footer-info__phone">
              +48 513 416 750
            </a>
            <a href="mailto:aukuris@inbox.lt" className="footer-info__email">
              aukuris@inbox.lt
            </a>
          </div>
          <div className="footer-icons">
            <a
              href="https://t.me/+48513416750/"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <img src="/assets/telegram.svg" alt="telegram" />
            </a>
            <a
              href="https://wa.me/+48513416750"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <img src="/assets/whatsapp.svg" alt="whatsapp" />
            </a>
          </div>
        </div>
        <div className="footer-copyright">Copyright Aukuris 2023 | All Rights Reserved</div>
      </div>
    </footer>
  )
}
