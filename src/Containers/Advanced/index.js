import React from "react";
import { Button } from "../../components/Button";
import { Content } from "../Wrappers";
const Advanced = (props) => {
  const { image, allowStack } = props;
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
    { "sunrise": "sunrise" },
    { "cross-process": "crossProcess" },
    { love: "love" },
    { grungy: "grungy" },
    { jarques: "jarques" },
    { pinhole: "pinhole" },
    { "old-boot": "oldBoot" },
    { "glowing-sun": "glowingSun" },
    { "hazy-days": "hazyDays" },
    { pinhole: "pinhole" },
    { "her-majesty": "herMajesty" },
    { nostalgia: "nostalgia" },
    { hemingway: "hemingway" },
    { concentrate: "concentrate" },
  ];
  const applyAdvanced = (element) => {
    return window.Caman("#canvas", image, function () {
      const co = allowStack ? null : this.revert();
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
    </Content>
  );
};
export default Advanced;
