import styled from "styled-components";

export const Header = styled.div`
  height: 64px;
  background: ${(props) => props.theme.colors.background};
  position: sticky;
  top: 0;
`;
export const Footer = styled.div`
  height: 64px;
  background: ${(props) => props.theme.colors.background};
`;
