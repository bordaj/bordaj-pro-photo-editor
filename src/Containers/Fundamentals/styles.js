import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  width: max-content;
`;
export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  padding: 4px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonColor};
   background: ${(props) => props.theme.colors.buttonBackground};
  :hover {
    box-shadow: 5px 5px ${(props) => props.theme.colors.sliderBox};;
  }

  input[type="range"] {
    width: 100%;
    margin: 4.25px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background: ${(props) => props.theme.colors.buttonColor};
    border: 0.2px solid #010101;
    border-radius: 1.3px;
    width: 100%;
    height: 9.5px;
    cursor: pointer;
  }
  input[type="range"]::-webkit-slider-thumb {
    margin-top: -4.45px;
    width: 18px;
    height: 18px;
    background: ${(props) => props.theme.colors.buttonColor};

    border: 1px solid #00001e;
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
    :hover {
      background: red;
    }
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: ${(props) => props.theme.colors.buttonColor};
  }
  input[type="range"]::-moz-range-track {
    background: ${(props) => props.theme.colors.buttonColor};
    border: 1px solid ${(props) => props.theme.colors.buttonColor};
    border-radius: 13px;
    width: 100%;
    height: 9.5px;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: ${(props) => props.theme.colors.buttonBackground};
    border: 1px solid ${(props) => props.theme.colors.buttonColor};
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background: ${(props) => props.theme.colors.buttonColor};
      border: 1px solid ${(props) => props.theme.colors.buttonBackground};
    }
  }
`;
