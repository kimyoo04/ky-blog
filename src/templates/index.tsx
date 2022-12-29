import styled from "@emotion/styled";

// -------------------------------------------------------
// Root
// -------------------------------------------------------
export const Root = styled.div`
  width: 100vw;
  height: auto;
`;

// -------------------------------------------------------
// Header
// -------------------------------------------------------
export const Header = styled.div`
  background-color: blueviolet;
`;

// -------------------------------------------------------
// Aside
// -------------------------------------------------------
export const Aside = styled.div`
  background-color: green;
  flex: none;
  width: 32rem;
`;

// -------------------------------------------------------
// Main
// -------------------------------------------------------
export const Main = styled.div`
  background-color: goldenrod;
  flex: 1;
  min-height: 48rem;
`;

// -------------------------------------------------------
// Footer
// -------------------------------------------------------
export const Footer = styled.div`
  width: 100%;
  background-color: black;
  color: white;
`;

// -------------------------------------------------------
// layout
// -------------------------------------------------------
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  padding: 3.2rem;
`;
