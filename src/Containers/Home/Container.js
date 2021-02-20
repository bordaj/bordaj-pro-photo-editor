import React, { useEffect, useState, useRef } from "react";
import Fundamentals from "../Fundamentals";
import Advanced from "../Advanced";
import Crop from "../Crop";
import { CanvasWrapper, ContentWrapper,ButtonWrapper } from "../Wrappers";
import { Button, DownloadButton } from "../../components/Button";
import { HeaderTitle } from "../../components/Header";
import Custom from "../Custom";
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
  const [allowStack, setAllowStack] = useState(false);
  const [reset, setReset] = useState(false);
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
    const container = document.getElementById("hideOriginal");
    const oldcanv = document.getElementById("canvas");
    container.removeChild(oldcanv);
    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    container.appendChild(canvas);
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
    window.Caman("#canvas", function () {
      //console.log(this.toBase64());
      let a = document.createElement("a");
      a.href = this.toBase64();
      a.download = "edited.jpg";
      a.click();
    });

    // const png = canvas.toDataURL("image/png", 1);
    // e.target.href = png;
  };
  const handleCrop = () => {
    setCrop(!crop);
    document.getElementById("canvas").style.display = "none";
  };
  const obj = imgsrc ? { display: "none" } : null;
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
            <canvas id="original-canvas" ref={originalCanvasRef} />
          </div>
          <div id="hideOriginal">
            <canvas id="canvas" ref={canvasRef} width={0} height={0} />
          </div>
          {!crop && image ? null : (
            <Crop image={image} canvas={canvas} setCrop={setCrop} />
          )}
        </CanvasWrapper>
      </div>
      <ButtonWrapper>
        {!crop ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={onSelectedFile}
              id="upload-file"
            />
            <label for="upload-file">Upload a Picture</label>
          </>
        ) : null}
        {imgsrc ? (
          !crop ? (
            <>
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
              <DownloadButton onClick={(e) => handleSave(e)}>
                Download Image
              </DownloadButton>
              <Button onClick={() => handleCrop()}>Crop</Button>
            </>
          ) : null
        ) : null}
      </ButtonWrapper>
      {imgsrc ? (
        <ContentWrapper>
          <HeaderTitle style={{ paddingTop: 16 }}>
            Fundamentals{" "}
            <span style={{ fontSize: "small", fontWeight: "normal" }}>
              Use MMB to reset single property.{" "}
              <span
                onClick={() => setReset(true)}
                style={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Reset All
              </span>
            </span>
          </HeaderTitle>

          <Fundamentals
            ctx={ctx}
            setContext={setContext}
            canvas={canvas}
            image={image}
            reset={reset}
            setReset={setReset}
          />
          <HeaderTitle style={{ paddingTop: 16 }}>
            Advanced{" "}
            <span style={{ fontSize: "small", fontWeight: "normal" }}>
              I want my filters to{" "}
              <span
                onClick={() => setAllowStack(!allowStack)}
                style={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                {allowStack ? "stack." : "not stack."}
              </span>
            </span>
          </HeaderTitle>
          <Advanced
            ctx={ctx}
            setContext={setContext}
            canvas={canvas}
            image={image}
            allowStack={allowStack}
          />
          <HeaderTitle style={{ paddingTop: 16 }}>Custom</HeaderTitle>
          <Custom image={image} />
        </ContentWrapper>
      ) : null}
    </>
  );
};
export default Home;
