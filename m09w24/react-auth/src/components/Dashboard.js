import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Dashboard({ token }) {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, color, emoji } = e.target;

    const body = {
      name: name.value,
      color: color.value,
      emoji: emoji.value,
    };

    const headers = {
      authorization: `Bearer ${token}`,
    };

    axios
      .post('http://localhost:8001/api/fruits', body, { headers })
      .then((res) => {
        //   localStorage.setItem('token', token);
        console.log(res.data);
        history.push('/dashboard/done');
      });
  };

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Dashboard!</h1>
      <input type="text" name="name" />
      <input type="color" name="color" />
      <input type="text" name="emoji" />
      <button type="submit">Submit fruit</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default Dashboard;
