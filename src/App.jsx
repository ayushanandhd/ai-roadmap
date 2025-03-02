import { useState } from "react";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import MermaidDiagram from "./MermaidDiagram";
import { getPrompt } from "./prompt.js";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function App() {
  const [input, setInput] = useState("");
  const [chart, setChart] = useState("graph LR;");
  const [title, setTitle] = useState("")

  function handleInput(input) {
    setInput(input);
  }

  async function handleClick() {
    // console.log(input);

    // get mermaid code from gemini
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // const prompt = `please provide me mermaidjs code for a flowchart with a proper roadmap for learning ${input}. make sure to return only the mermaid js code and no extra characters or text and make sure the code is compatible with mermaid js 11.4.1 . heres an exmaple mermaid js code : graph LR; A[Start] --> B(HTML & CSS) --> C(JavaScript) --> D(Git & GitHub) --> E(Responsive Design) --> F(React or Vue) --> G(Node.js & Express) --> H(MongoDB or SQL) --> I(Deploying Websites) --> J[Keep Learning & Building!] . strictly consider the example and follow the rules. remove triple backtics from the start and the end and also remove the word mermaid after the starting triple backtic. Generate a MermaidJS diagram in one line using graph LR; syntax, ensuring proper flow between nodes, and return only the MermaidJS code with no explanations or extra text. make sure to make the flowchart has links to resources to learn that topic. and is clickable. heres an example of a flowchart with links: graph TD; A[Start] --> B[Learn HTML]; click B "https://developer.mozilla.org/en-US/docs/Web/HTML" _blank; B --> C[Learn CSS]; click C "https://developer.mozilla.org/en-US/docs/Web/CSS" _blank; C --> D[Learn JavaScript]; click D "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" _blank; D --> E[Build Projects]; click E "https://www.frontendmentor.io/" _blank; use branches if you want to in order to make the roadmap/flowchart better. heres an example flowchart with branches : graph TD; A[Start] --> B[Learn HTML]; click B "https://developer.mozilla.org/en-US/docs/Web/HTML" _blank; A --> C[Learn CSS]; click C "https://developer.mozilla.org/en-US/docs/Web/CSS" _blank; A --> D[Learn JavaScript]; click D "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" _blank; D --> E[DOM Manipulation]; click E "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" _blank; D --> F[ES6+ Features]; click F "https://javascript.info/es-modern" _blank; E --> G[Build Interactive Websites]; click G "https://www.frontendmentor.io/" _blank; F --> H[Learn Frameworks]; click H "https://react.dev/" _blank;`;

    const result = await model.generateContent(getPrompt(input));
    console.log(result.response.text());

    setChart(result.response.text());

    setTitle(input + " " + "Roadmap")
  }

  // zoomable container

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

          <div className="title-container">
            <h1 className="title"> {title} </h1>
          </div>

      <div className="chart-container">
        <TransformWrapper
          minScale={0.5}
          maxScale={3}
          centerOnInit={true}
          limitToBounds={false}
          wheel={{ disabled: false }}
        >
          <TransformComponent>
            <div
              style={{ width: "100vw", height: "62vh", overflow: "visible" }}
            >
              {" "}
              {/* ✅ Prevent clipping */}
              <MermaidDiagram chart={chart} />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </>
  );
}

export default App;
