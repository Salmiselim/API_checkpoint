import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
  function getData() {

    return (
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
          console.log(response)
      })
    )
  }
  return (
    <div className="App">
    <button onClick={getData()}>getData</button>

    </div>
  );
}

export default App;
