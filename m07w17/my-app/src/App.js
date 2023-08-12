import './App.css';

import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header prop1="hello!" prop2={2 + 2} title="Welcome to ReactJS! ⚛️" />
      <Counter initialValue={100} />
    </>
  );
}

export default App;
