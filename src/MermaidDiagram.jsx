import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidDiagram = ({ chart }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chart) return; // Avoid rendering if chart is empty

    mermaid.initialize({ startOnLoad: true });

    // Generate unique ID for each render
    const renderMermaid = async () => {
      if (chartRef.current) {
        try {
          const { svg } = await mermaid.render("mermaidChart", chart);
          chartRef.current.innerHTML = svg;
        } catch (error) {
          console.error("Mermaid rendering error:", error);
        }
      }
    };

    renderMermaid();
  }, [chart]);

  return <div ref={chartRef} className="mermaid"></div>;
};

export default MermaidDiagram;
