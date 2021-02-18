import React, { useEffect, useState, useRef } from "react";
import Fundamentals from "../Containers/Fundamentals";
import Advanced from "../Containers/Advanced";
import Crop from "../Containers/Crop";
import { CanvasWrapper, ContentWrapper } from "../Containers/AppWrapper";
import { Button, DownloadButton } from "../components/Button";
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
  const [crop, setCrop] = useState(false);
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
    renderImage();
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
      originalCanvas.width = img.width;
      originalCanvas.height = img.height;
      let yolo = originalCanvas
        ? originalCanvas
            .getContext("2d")
            .drawImage(img, 0, 0, img.width, img.height)
        : 0;
      ctx.drawImage(img, 0, 0, img.width, img.height);
    };
  };
  useEffect(() => {
    renderImage();
  }, [imgsrc]);
  let active = 0;
  const handleSave = (e) => {
    const png = canvas.toDataURL();
    e.target.href = png;
  };
  const handleCrop = () => {
    setCrop(!crop);
  };

  useEffect(() => {
    if (crop) {
      document.getElementById("hideOriginal").style.display = "none";
      document.getElementById("hide").style.display = "block";
    } else {
      document.getElementById("hideOriginal").style.display = "block";
    }
  }, [crop]);
  const saveCropped = () => {};
  return (
    <>
      <div
        style={{ margin: "0px 20%", display: "flex", justifyContent: "center" }}
      >
        <CanvasWrapper style={{ position: "relative" }}>
          <div
            id="hide"
            style={{ display: "none", position: "absolute", top: 0 }}
          >
            <canvas
              id="original-canvas"
              ref={originalCanvasRef}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div id="hideOriginal">
            <canvas
              id="canvas"
              ref={canvasRef}
              width={600}
              height={400}
              style={{ border: "1px solid black" }}
            />
          </div>
          {!crop && image ? null : (
            <Crop image={image} canvas={canvas} setCrop={setCrop} />
          )}
        </CanvasWrapper>
      </div>
      <ContentWrapper style={{ flexDirection: "row" }}>
        <input
          type="file"
          accept="image/*"
          onChange={onSelectedFile}
          id="upload-file"
        />
        <label for="upload-file">Upload a Picture</label>
        <Button
          onMouseLeave={(e) => {
            document.getElementById("hide").style.display = "none";
          }}
          onMouseEnter={(e) => {
            document.getElementById("hide").style.display = "block";
          }}
        >
          Show Original
        </Button>
        <DownloadButton
          onClick={(e) => handleSave(e)}
          download="edited"
          href="#1"
        >
          Download Image
        </DownloadButton>
        {imgsrc ? (
          !crop ? (
            <Button onClick={() => handleCrop()}>Crop</Button>
          ) : null
        ) : null}
      </ContentWrapper>
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
