import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/* Button mit dem bisherigen Slide-Effekt: Text schiebt sich beim Hover raus,
   die Kopie schiebt sich rein. */
export function SlideButton({ to, children, variant = 'light', end }) {
  const Component = to ? NavLink : 'span';
  return (
    <Component to={to} end={end} className={`btn btn--${variant}`}>
      <span className='btn__a'>{children}</span>
      <span className='btn__b' aria-hidden='true'>{children}</span>
    </Component>
  );
}

const links = [
  { to: '/Referenzen', label: 'Referenzen' },
  { to: '/Interessen', label: 'Interessen' },
  { to: '/Kontakt', label: 'Kontakt' },
];

export default function Nav({ home = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${home ? 'nav--home' : ''} ${scrolled ? 'nav--scrolled' : ''}`}>
      {!home && (
        <Link to='/' className='nav__logo' aria-label='Zur Startseite'>
          Gian Oechslin
        </Link>
      )}
      <nav aria-label='Hauptnavigation'>
        <ul className='nav__list'>
          {links
            .filter((l) => !(home && l.to === '/Kontakt'))
            .map((l) => (
              <li key={l.to}>
                <SlideButton to={l.to} variant={home ? 'dark' : 'light'}>
                  {l.label}
                </SlideButton>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
