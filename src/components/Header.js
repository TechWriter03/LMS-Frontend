import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link className="navbar-brand" to='/' style={{ color: 'white' }}>Cyber Learn</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link white-text" to='/login' style={{ color: 'white' }}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link white-text" to='/register' style={{ color: 'white' }}>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link white-text" to='/courses' style={{ color: 'white' }}>Courses</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
