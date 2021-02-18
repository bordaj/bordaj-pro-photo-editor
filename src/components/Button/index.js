import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonColor};
  display: block;
  margin-top: 24px;
  max-width: 100%;
  border: 1px solid ${(props) => props.theme.colors.buttonColor};
  line-height: 36px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 14px;
  :hover {
    background: ${(props) => props.theme.colors.buttonColor};
    color: ${(props) => props.theme.colors.buttonBackground};
    border: ${(props) => props.theme.colors.buttonBorder};
  }
`;
export const DownloadButton = styled.a`
  background: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonColor};
  display: block;
  margin-top: 24px;
  max-width: 100%;
  border: 1px solid ${(props) => props.theme.colors.buttonColor};
  line-height: 36px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  :hover {
    background: ${(props) => props.theme.colors.buttonColor};
    color: ${(props) => props.theme.colors.buttonBackground};
    border: ${(props) => props.theme.colors.buttonBorder};
  }
`;
