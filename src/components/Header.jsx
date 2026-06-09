import { useState } from 'react'

const navItems = [
  { href: '#main', label: 'Main Page', className: 'main-link', aos: 'flip-left', delay: 0 },
  { href: '#products', label: 'Products', className: 'products-link', aos: 'flip-up', delay: 300 },
  { href: '#contact', label: 'Contact us', className: 'contact-link', aos: 'flip-right', delay: 500 },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <nav className={`header-menu${menuOpen ? ' active' : ''}`}>
            <ul className="header-menu__list">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`header-menu__item ${item.className}`}
                  data-aos={item.aos}
                  data-aos-duration="500"
                  {...(item.delay ? { 'data-aos-delay': item.delay } : {})}
                >
                  <a href={item.href} className="header-menu__link" onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={`menu-burger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}
