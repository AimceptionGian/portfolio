import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <Link to='/' className='footer__name'>Gian Oechslin</Link>
      <span className='footer__meta'>© {new Date().getFullYear()} · Portfolio</span>
    </footer>
  );
}
