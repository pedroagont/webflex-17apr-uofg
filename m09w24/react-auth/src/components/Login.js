import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login({ setToken }) {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    const body = {
      email: email.value,
      password: password.value,
    };

    axios.post('http://localhost:8001/api/auth/login', body).then((res) => {
      console.log(res.data.token);
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      history.push('/dashboard');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login!</h1>
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default Login;
