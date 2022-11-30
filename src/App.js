import image from "./asset/image.jpg";
import logo from "./asset/logoW.png";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let fristCount = localStorage.getItem("count");
    if (!fristCount) {
      setCount(0);
    } else {
      setCount(parseInt(fristCount));
      console.log("setted firstTime");
    }
  }, [count]);
  const decrement = () => {
    localStorage.setItem("count", count - 1);
    setCount(count - 1);
  };
  const update = () => {
    localStorage.setItem("count", count + 1);
    setCount(count + 1);
  };
  const reset = () => {
    if (window.confirm("Sicuro che vuoi cancellare")) {
      localStorage.setItem("count", 0);
      setCount(0);
    }
  };

  return (
    <>
      <div className="App">
        <div className="left">
          <div onClick={() => reset()} className="polaroid">
            <img src={image} alt="5 Terre" style={{ width: "100%" }} />
            <div className="container">
              <p>Nome Cocktail</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="logo">
            <img src={logo} style={{ width: "50%" }} alt="LOGO" />
          </div>
          <h1 onClick={() => decrement()}>Cocktail a 1€</h1>
          <h1>{count}</h1>
          <h1 className="btn" onClick={() => update()}>
            Dona
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
