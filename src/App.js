import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { KwilClient } from "./KwilClient";

const client = new KwilClient();

function App() {
  const [greetings, setGreetings] = useState([]);
  const [greet, setGreet] = useState();
  function fetchData() {
    client
      .readGreetings()
      .then((r) => {
        console.log(r.data);
        setGreetings(r.data.body);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const addGreeting = useCallback(async (greeting) => {
    await client.addGreeting(getRandomInt(1000000), greeting);
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello kwil</h1>
      {greetings.length > 0 &&
        greetings.map((el) => <li key={el.id}>{el.message}</li>)}
      <div>
        <input
          placeholder="addGreeting area"
          onChange={(e) => setGreet(e.target.value)}
        />
        <button onClick={() => addGreeting(greet)}>insert</button>
      </div>
    </div>
  );
}

export default App;
