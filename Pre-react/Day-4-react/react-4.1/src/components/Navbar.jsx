import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '15px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '20px' }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: '20px' }}>
        About
      </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
