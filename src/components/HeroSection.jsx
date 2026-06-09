export default function HeroSection() {
  return (
    <section className="main" id="main">
      <div className="left-column">
        <img src="/assets/main-page.png" className="figure" alt="figures" />
        <img
          src="/assets/logo.svg"
          className="logo"
          data-aos="fade-right"
          data-aos-delay="300"
          alt=""
        />
      </div>
      <div className="right-column fade-left">
        <div className="right-column__text">
          <p>
            We search and implement new lab technologies, equipment, and testing
            systems, relying on regional partners and distribution companies to
            collaborate on restructuring and equipping institutions and making
            healthcare accessible and affordable.
          </p>
        </div>
      </div>
    </section>
  )
}
