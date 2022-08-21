import react from 'react';
import './css/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <Link className='nav-link' to='/about'>
          <li>About</li>
        </Link>
        <Link className='nav-link' to='/'>
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
