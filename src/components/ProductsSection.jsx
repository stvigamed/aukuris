import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductsSection() {
  return (
    <section className="products" id="products">
      <h3 className="products-title">Everything you need for your laboratory</h3>
      <div className="products-wrapper">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.logo}
              logo={product.logo}
              image={product.image}
              delay={product.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
