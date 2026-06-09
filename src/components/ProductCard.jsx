export default function ProductCard({ logo, image, delay }) {
  return (
    <div
      className="product-container"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="linear"
      {...(delay ? { 'data-aos-delay': delay } : {})}
    >
      <div className="product-logo">
        <img src={logo} alt="product-logo" />
      </div>
      <div className="product-image-container">
        <img src={image} className="product-image" alt="product" />
      </div>
    </div>
  )
}
