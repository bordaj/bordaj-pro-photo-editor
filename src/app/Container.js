import React, { useEffect, useState, useRef } from "react";
import Fundamentals from "../Containers/Fundamentals";
import Advanced from "../Containers/Advanced";

import {
  CanvasWrapper,
  Tabs,
  Tab,
  ContentWrapper,
} from "../Containers/AppWrapper";
const Home = () => {
  const [imgsrc, setImgsrc] = useState(null);
  const canvasRef = useRef(null);
  const originalCanvasRef = useRef(null);
  const [ctx, setCtx] = useState();

  const canvas = canvasRef.current;
  const originalCanvas = originalCanvasRef.current;
  const image = new Image();
  image.crossOrigin = "Anonymous";
  image.src = imgsrc;
  // console.log("image", imgsrc);
  // console.log("imgsrc", image.src.split("/")[image.src.split("/").length]);
  const setContext = (newCtx) => {
    console.log("set context");
    setCtx(newCtx);
  };

  async function drawImage(e) {
    if (e === "initial") {
      let newCtx = await canvas.getContext("2d");
      let ogCt = await originalCanvas.getContext("2d");

      setContext(newCtx);
      ogCt.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        canvas.width,
        canvas.height
      );

      newCtx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
    } else {
      if (!canvas) {
        alert("Image not found!");
        return;
      }
    }
  }
  if (imgsrc !== null) {
    drawImage("initial");
  }

  const onSelectedFile = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImgsrc(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const renderImage = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "";
    img.src = imgsrc;

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
    };
  };
  useEffect(() => {
    renderImage();
  }, [imgsrc]);
  let active = 0;
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      active = index;
    }
  };
  return (
    <>
      <div style={{ margin: "auto", width: "max-content" }}>
        <CanvasWrapper>
          <div>
            <canvas
              id="original-canvas"
              ref={originalCanvasRef}
              width={600}
              height={400}
              style={{ border: "1px solid black", display: "none" }}
            />
          </div>
          <div>
            <canvas
              id="canvas"
              ref={canvasRef}
              width={600}
              height={400}
              style={{ border: "1px solid black" }}
            />
          </div>
        </CanvasWrapper>
        <div
          onMouseLeave={(e) => {
            document.getElementById("original-canvas").style.display = "none";
          }}
          onMouseEnter={(e) => {
            document.getElementById("original-canvas").style.display = "block";
          }}
          style={{
            width: 300,
            height: 40,
            border: "1px solid black",
            color: "black",
            textAlign: "center",
          }}
        >
          Show Original
        </div>
        <div style={{ padding: 24 }}>
          <input
            className="custom-file-input"
            type="file"
            accept="image/*"
            onChange={onSelectedFile}
            id="initial"
          />
        </div>
      </div>

      <ContentWrapper>
        <Fundamentals
          ctx={ctx}
          setContext={setContext}
          canvas={canvas}
          image={image}
        />
        <Advanced
          ctx={ctx}
          setContext={setContext}
          canvas={canvas}
          image={image}
        />
      </ContentWrapper>
    </>
  );
};
export default Home;
