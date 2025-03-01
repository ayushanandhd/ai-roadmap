import { useState } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import MermaidDiagram from "./MermaidDiagram";
import { FaArrowRight } from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";



function App() {
  const [input, setInput] = useState("");
  const [chart, setChart] = useState("graph LR;");

  function handleInput(input) {
    setInput(input);
  }

  async function handleClick() {
    // console.log(input);

    // get mermaid code from gemini
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `please provide me mermaidjs code for a flowchart with a proper roadmap for learning ${input}. make sure to return only the mermaid js code and no extra characters or text and make sure the code is compatible with mermaid js 11.4.1 . heres an exmaple mermaid js code : graph LR; A[Start] --> B(HTML & CSS) --> C(JavaScript) --> D(Git & GitHub) --> E(Responsive Design) --> F(React or Vue) --> G(Node.js & Express) --> H(MongoDB or SQL) --> I(Deploying Websites) --> J[Keep Learning & Building!] . strictly consider the example and follow the rules. remove triple backtics from the start and the end and also remove the word mermaid after the starting triple backtic. Generate a MermaidJS diagram in one line using graph LR; syntax, ensuring proper flow between nodes, and return only the MermaidJS code with no explanations or extra text.`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    setChart(result.response.text());
  }

  return (
    <>
      <div className="input-container">
        <input
        className="input-box"
          type="text"
          value={input}
          onChange={(e) => {
            handleInput(e.target.value);
          }}
          placeholder="What do you want to learn?"
        />
        <button
        className="search-button"
          onClick={() => {
            handleClick();
          }}
        >
          🔥


        </button>
      </div>
      <div className="chart-container">
        <MermaidDiagram chart={chart} />
      </div>
    </>
  );
}

export default App;
