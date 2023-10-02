import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    const body = {
      email: email.value,
      password: password.value,
    };

    axios
      .post('http://localhost:8001/api/auth/register', body)
      .then((res) => history.push('/login'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register!</h1>
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type="submit">Register</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default Register;
