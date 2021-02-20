import React from "react";
import { Button } from "../../components/Button";
import { Content } from "../Wrappers";
const Custom = (props) => {
  const { image } = props;

  const customFilterList = [
    {
      "Morning Star": "morningStar",
      button: () => {
        return window.Caman("#canvas", image, function () {
          this.brightness(20);
          this.contrast(-10);
          this.sinCity();
          this.render();
        });
      },
    },
    {
      pleasant: "pleasant",
      button: () => {
        return window.Caman("#canvas", image, function () {
          this.colorize(60, 105, 218, 10);
          this.contrast(10);
          this.sunrise();
          this.hazyDays();
          this.render();
        });
      },
    },
    {
      "Old Paper": "oldPaper",
      button: () => {
        return window.Caman("#canvas", image, function () {
          this.pinhole();
          this.noise(10);
          this.orangePeel();
          this.render();
        });
      },
    },
    {
      HDR: "hdr",
      button: () => {
        return window.Caman("#canvas", image, function () {
          this.contrast(10);
          this.contrast(10);
          this.jarques();
          this.render();
        });
      },
    },
  ];

  return (
    <Content style={{ marginBottom: 32 }}>
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
