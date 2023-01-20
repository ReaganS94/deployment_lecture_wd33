import { useState, useEffect } from "react";
import "./App.css";
// import Login from "./components/Login";
import { Navbar } from "./components/Navbar";

function App() {
  const [cars, setCars] = useState([]);

  console.log(process.env.REACT_APP_API_ENDPOINT);

  // const getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       console.log("RESPONSE", res);
  //       res.json();
  //     })
  //     .then((data) => {
  //       setPosts(data); // ==> QUEUES a re-render
  //       console.log("DATA", data);
  //     })
  //     .catch((e) => console.log(e));
  // };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_API_ENDPOINT);
        const data = await res.json();

        if (res.ok) {
          setCars(data);
        }

        if (!res.ok) {
          throw Error("whoops");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // IIFE - Immediately Invoked Function Expression
  // (function () {
  //   //something
  // })();

  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      {cars &&
        cars.map((car) => (
          <div key={car._id}>
            <h4>
              <strong>Brand:</strong> {car.model}
            </h4>
            <h4>
              <strong>Year:</strong> {car.year}
            </h4>
          </div>
        ))}
    </div>
  );
}

export default App;
