import React, { useState, useEffect } from "react";
import {Button} from "../../components/Button";
import { Content } from "../AppWrapper";
const Advanced = (props) => {
  const { ctx, setContext, canvas, image } = props;

  const filterList = ["vintage", "lomo", "emboss", "radialBlur"];
  const applyAdvanced = (element) => {
    return window.Caman("#canvas", image, function () {
      this[element]().render();
    });
  };
  useEffect(() => {}, []);

  return (
    <Content>
      {filterList.map((element) => {
        return (
          <Button onClick={() => applyAdvanced(element)}>{element}</Button>
        );
      })}
    </Content>
  );
};
export default Advanced;
