import React from "react";
import { Button } from "../../components/Button";
import { Content } from "../AppWrapper";
const Advanced = (props) => {
  const { image } = props;

  const filterList = [
    { vintage: "vintage" },
    { lomo: "lomo" },
    { emboss: "emboss" },
    { "radial-blur": "radialBlur" },
    { noise: "noise" },
    { "tilt-shift": "tiltShift" },
    { "edge-enhance": "edgeEnhance" },
    { posterize: "posterize" },
    { clarity: "clarity" },
    { "orange-peel": "orangePeel" },
    { "sin-city": "sinCity" },
    { "sun-rise": "sunRise" },
    { "cross-process": "crossProcess" },
    { love: "love" },
    { grungy: "grungy" },
    { jarques: "jarques" },
    { pinhole: "pinhole" },
    { "old-boot": "oldBoot" },
    { "glowing-sun": "glowingSun" },
    { "hazy-days": "hazyDays" },
  ];
  const customFilterList = [
    {
      oldPaper: "oldPaper",
      button: () => {
        return window.Caman("#canvas", image, function () {
          this.pinhole();
          this.noise(10);
          this.orangePeel();
          this.render();
        });
      },
    },
  ];
  const applyAdvanced = (element) => {
    return window.Caman("#canvas", image, function () {
      this[element]().render();
    });
  };

  return (
    <Content>
      {filterList.map((element, i) => {
        return (
          <Button
            onClick={() => applyAdvanced(element[Object.keys(element)[0]])}
          >
            {Object.keys(element)[0]}
          </Button>
        );
      })}
      {customFilterList.map((element, i) => {
        return (
          <Button
            onClick={() => {
              element.button();
            }}
          >
            {Object.keys(element)[0]}
          </Button>
        );
      })}
    </Content>
  );
};
export default Advanced;
