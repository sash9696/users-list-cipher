import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  //get request

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="app_container">
      <h1>Fetch Data</h1>
      {data.map((user, index) => {
        return (
          <div className="app_list" key={user.id}>
            <h1 className="app_name">{user.name}</h1>
            <p className="app_username">{user.username}</p>
            <p className="app_email">{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
