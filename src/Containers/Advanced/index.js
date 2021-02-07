import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Content } from "../AppWrapper";
const Advanced = (props) => {
  const { ctx, setContext, canvas, image } = props;

  const filterList = [
    { vintage: "vintage" },
    { lomo: "lomo" },
    { emboss: "emboss" },
    { "radial-blur": "radialBlur" },
    { noise: "noise" },
    { "tilt-shift": "tiltShift" },
  ];
  const applyAdvanced = (element) => {
    return window.Caman("#canvas", image, function () {
      this[element]().render();
    });
  };
  useEffect(() => {}, []);

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
