import React, { useEffect, useRef } from 'react';

function App() {
  const canvasRef = useRef(null);
  const state = useRef({ objects: [] });

  useEffect(function () {
    window.requestAnimationFrame(draw);

  }, []);


  function draw() {
    const ctx = canvasRef.current.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, 640, 640);

    // Color Background
    ctx.fillStyle = "#dddddd";
    ctx.fillRect(0, 0, 640, 425);

    state.current.objects.forEach(o => {
      ctx.fillStyle = o.fillStyle;
      ctx.beginPath();
      ctx.rect(o.x, o.y, o.width, o.height);
      ctx.stroke();
    });

    window.requestAnimationFrame(draw);
  }

  function drawRectangle() {
    state.current.objects.push({ type: 'Rectangle', selected: false, x: 20, y: 20, width: 150, height: 100, fillStyle: "#000000" });
  }

  function moveObject() {
    const object = state.current.objects[0];
    object.x += 20;
  }

  return (
    <div>
      <button onClick={drawRectangle}>Rectangle</button>
      <button onClick={moveObject}>Move</button>
      <br />
      <canvas ref={canvasRef} width={640} height={425} />
    </div>
  );
}

export default App;
