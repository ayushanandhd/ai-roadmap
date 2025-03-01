import { useState } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [input, setInput] = useState("");

  function handleInput(input) {
    setInput(input);
  }

  async function handleClick() {
    console.log(input);

    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


    const result = await model.generateContent(input);
    console.log(result.response.text());
  }
  

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        <FaSearch />
      </button>
    </>
  );
}

export default App;
