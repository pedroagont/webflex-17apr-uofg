import { Link } from 'react-router-dom';

function Navigation({ token, setToken }) {
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>
        <Link to="/">My App</Link>
      </span>
      {token ? (
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            listStyle: 'none',
            width: '50%',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      ) : (
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            listStyle: 'none',
            width: '50%',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
