import React, { useState, useEffect, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button, DownloadButton } from "../../components/Button";
import { ContentWrapper } from "../Wrappers";

const Crop = (props) => {
  const { ctx, setContext, image, setCrop } = props;
  const cropperRef = useRef(null);
  const [canvas, setCanvas] = useState(document.getElementById("canvas"));
  const handleSave = (e) => {
    const imageElement = cropperRef.current;
    const cropper = imageElement.cropper;
    const png = cropper.getCroppedCanvas().toDataURL();
    e.target.href = png;
  };
  useEffect(() => {}, [canvas]);
  return (
    <div>
      <Cropper
        ref={cropperRef}
        checkCrossOrigin={false}
        style={{ height: image.height, width: image.width }}
        initialAspectRatio={1}
        src={canvas.toDataURL()}
        viewMode={1}
        guides={true}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
      />
      <ContentWrapper style={{ flexDirection: "row", margin: 0 }}>
        <Button
          onClick={() => {
            setCrop(false);
            document.getElementById("canvas").style.display = "block";
          }}
        >
          Cancel Crop
        </Button>
        <DownloadButton
          onClick={(e) => handleSave(e)}
          download="edited"
          href="#1"
        >
          Download Cropped
        </DownloadButton>
      </ContentWrapper>
    </div>
  );
};
export default Crop;
