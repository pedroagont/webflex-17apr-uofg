import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Done() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push('/dashboard'), 2000);
  }, [history]);

  return <h1>Done!</h1>;
}

export default Done;
