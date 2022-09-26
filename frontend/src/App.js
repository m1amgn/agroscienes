import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

function App() {
  
  const postData = {
    "culture": "Жопа"
  };

  const API_URL = 'http://localhost:8000';

  const getData = () => {
		const url = `${API_URL}/api/calcfertapi/`;
		return axios.get(url).then(response => response.data);
	}

  const postSendData = (postData) => {
    axios({
      method: 'post',
      url: `${API_URL}/api/calcfertapi/`,
      data: postData
    })};

  const data = getData();
  console.log(data);
  postSendData(postData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
