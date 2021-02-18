import styled from "styled-components";

export const AppWrapper = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.textColor};
  padding-top: 32px;
  max-height: calc(100vh - 128px);
  overflow-y: auto;
  /* @media (max-width: 786px) {
    flex-direction: columne;
  } */
`;
export const CanvasWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 20%;
  [type="file"] {
    display: none;
  }

  [type="file"] + label {
    background: ${(props) => props.theme.colors.buttonBackground};
    color: ${(props) => props.theme.colors.buttonColor};
    display: block;
    margin-top: 24px;
    max-width: 100%;
    line-height: 36px;
    padding: 0 12px;
    border-radius: 4px;
    font-size: 14px;
    position: relative;
    left: 0px;
  }

  [type="file"] + label:hover {
    background: ${(props) => props.theme.colors.buttonColor};
    color: ${(props) => props.theme.colors.buttonBackground};
    border: ${(props) => props.theme.colors.buttonBorder};
  }
`;
export const Content = styled(ContentWrapper)`
  flex-direction: row;
  margin: 0;
  flex-wrap: wrap;
`;

export const Tabs = styled.div`
  overflow: hidden;
  font-family: Open Sans;
  height: 3em;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${(props) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "")};
  background-color: ${(props) => (props.active ? "white" : "lightgray")};
  height: ${(props) => (props.active ? "3em" : "2.6em; top:.4em")};
`;
