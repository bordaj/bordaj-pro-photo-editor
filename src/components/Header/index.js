import styled from "styled-components";

export const Header = styled.div`
  height: 64px;
  background: ${(props) => props.theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 99;
`;
export const Footer = styled.div`
  height: 64px;
  background: ${(props) => props.theme.colors.background};
`;
