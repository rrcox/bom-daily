import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function logJSONData() {
      const id = "6419f6c8b61b42ba4e0d917e";
      const response = await fetch(`https://rrcox-cse341.onrender.com/user/${id}`);
      const jsonData = await response.json();
      setData(`${jsonData[0].fname} ${jsonData[0].lname}`);
      setImage(jsonData[0].img_url);
    }
    logJSONData();
  }, []);
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Book of Mormon Daily
        </p>
        <p>{!data ? "Loading..." : 'User: ' + data}</p>
        <img src={image} alt="user"/>
      </header>
    </div>
  );
}

export default App;
