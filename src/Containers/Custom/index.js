import React from "react";
import { Button } from "../../components/Button";
import { Content } from "../AppWrapper";
const Custom = (props) => {
  const { image } = props;

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

  return (
    <Content>
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
export default Custom;
