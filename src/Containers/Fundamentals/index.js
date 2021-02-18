import React, { useState, useEffect } from "react";
import * as codes from "../../helpers/codes";
import { Content } from "../AppWrapper";
import { SliderWrapper } from "./styles";
const Fundamentals = (props) => {
  const { image, reset, setReset } = props;
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [hue, setHue] = useState(0);
  const [vibrance, setVibrance] = useState(0);
  const [sepia, setSepia] = useState(0);

  const stateHelper = (code, val) => {
    if (code === codes.BRIGHTNESS) {
      setBrightness(val);
    } else if (code === codes.CONTRAST) {
      setContrast(val);
    } else if (code === codes.VIBRANCE) {
      setVibrance(val);
    } else if (code === codes.SEPIA) {
      setSepia(val);
    } else if (code === codes.HUE) {
      setHue(val);
    }
  };

  const applyFundamentals = (code, e, reset) => {
    const valu = parseInt(e.target.value) || 0;
    const value = reset ? 0 : valu;
    stateHelper(code, value);
    return window.Caman("#canvas", image, function () {
      this.revert();
      this.brightness(code == codes.BRIGHTNESS ? value : brightness)
        .hue(code == codes.HUE ? value : hue)
        .contrast(code == codes.CONTRAST ? value : contrast)
        .vibrance(code == codes.VIBRANCE ? value : vibrance)
        .sepia(code == codes.SEPIA ? value : sepia)
        .render();
    });
  };
  useEffect(() => {
    if (reset) {
      return window.Caman("#canvas", image, function () {
        this.revert();

        this.render();
        setBrightness(0);
        setContrast(0);
        setVibrance(0);
        setSepia(0);
        setHue(0);
        setReset(!reset);
      });
    }
  }, [brightness, contrast, hue, sepia, vibrance, reset]);

  return (
    <Content>
      <SliderWrapper>
        <label for="brightness">
          <div onAuxClick={(e) => applyFundamentals(codes.BRIGHTNESS, e, true)}>
            Brightness <span>{brightness}</span>
          </div>
        </label>
        <input
          onChange={(e) => applyFundamentals(codes.BRIGHTNESS, e)}
          id="brightness"
          name="brightness"
          type="range"
          min="-100"
          max="100"
          value={brightness}
        />
      </SliderWrapper>
      <SliderWrapper>
        <label for="contrast">
          <div onAuxClick={(e) => applyFundamentals(codes.CONTRAST, e, true)}>
            Contrast <span>{contrast}</span>
          </div>
        </label>
        <input
          onChange={(e) => applyFundamentals(codes.CONTRAST, e)}
          id="contrast"
          name="contrast"
          type="range"
          min="-20"
          max="20"
          value={contrast}
        />
      </SliderWrapper>
      <SliderWrapper>
        <label for="hue">
          <div onAuxClick={(e) => applyFundamentals(codes.HUE, e, true)}>
            Hue <span>{hue}</span>
          </div>
        </label>
        <input
          onChange={(e) => applyFundamentals(codes.HUE, e)}
          id="hue"
          name="hue"
          type="range"
          min="0"
          max="150"
          value={hue}
          step={5}
        />
      </SliderWrapper>
      <SliderWrapper>
        <label for="vibrance">
          <div onAuxClick={(e) => applyFundamentals(codes.VIBRANCE, e, true)}>
            vibrance <span>{vibrance}</span>
          </div>
        </label>
        <input
          onChange={(e) => applyFundamentals(codes.VIBRANCE, e)}
          id="vibrance"
          name="vibrance"
          type="range"
          min="0"
          max="300"
          value={vibrance}
        />
      </SliderWrapper>
      <SliderWrapper>
        <label for="sepia">
          <div onAuxClick={(e) => applyFundamentals(codes.SEPIA, e, true)}>
            sepia <span>{sepia}</span>
          </div>
        </label>
        <input
          onChange={(e) => applyFundamentals(codes.SEPIA, e)}
          id="sepia"
          name="sepia"
          type="range"
          min="-100"
          max="100"
          value={sepia}
        />
      </SliderWrapper>
    </Content>
  );
};
export default Fundamentals;
