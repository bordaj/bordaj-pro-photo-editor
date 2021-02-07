import styled from "styled-components";

export const AppWrapper = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.textColor};
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

