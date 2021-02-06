import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-tems: center;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  width: max-content;
`;
