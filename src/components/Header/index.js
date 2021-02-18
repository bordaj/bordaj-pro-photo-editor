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
  z-index: 99;
`;

export const HeaderTitle = styled.div`
  margin: 14px;
  color: ${props => props.theme.colors.textColor};
  font-weight: bold;
  font-size:24px;
`;
export const SwitchContainer = styled.div`
  margin: 20px;
`;
