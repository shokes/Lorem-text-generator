import React, { useState } from "react";
import "./App.css";
import "./index.css";
import data from "./data";

function App() {
  const [count, setCount] = useState("");

  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if (count > data.length) {
      amount = data.length;
    }
    if (count <= 0) {
      amount = 1;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring LOREM IPSUM?</h3>
      <form onSubmit={handleSubmit}>
        <label>paragraphs:</label>
        <input
          type="number"
          name="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button>generate</button>
      </form>

      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </section>
  );
}

export default App;
