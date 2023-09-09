import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function ItemsNewForm(props) {
  const { fetchItemsData } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('form submitted', e.target.content.value);
    const requestBody = {
      content: e.target.content.value,
    };

    axios.post('http://localhost:8000/api/items', requestBody).then((res) => {
      fetchItemsData();
      e.target.reset();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="content" />
      <button type="submit">Create new item!</button>
    </form>
  );
}

function ItemsList(props) {
  const { itemsData } = props;
  return (
    <div>
      <h2>All items</h2>
      <ul>
        {itemsData.length !== 0 ? (
          itemsData.map((item) => <li key={item}>{item}</li>)
        ) : (
          <li>Loading items...</li>
        )}
      </ul>
    </div>
  );
}

function App() {
  const [itemsData, setItemsData] = useState([]);

  const fetchItemsData = () => {
    axios.get('http://localhost:8000/api/items').then((res) => {
      setItemsData(res.data);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchItemsData();
    }, 3000);
  }, []);

  return (
    <>
      <h1>Welcome to my app!</h1>
      <ItemsNewForm fetchItemsData={fetchItemsData} />
      <ItemsList itemsData={itemsData} />
    </>
  );
}

export default App;
