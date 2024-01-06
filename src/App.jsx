import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [postData, setPostData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Async Await
  const getPostAPIData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPostData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getPostAPIData();
  }, []);

  // using Promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setPostData(response.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);


  return (
    <>
    <h1>Axios Post API Data</h1>
    {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {postData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
