import React from "react";
import styled from "styled-components";

const Base = styled.div`
  color: #000;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
  display: grid;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ Open }) => (Open ? "100%" : "0")};
  right: ${({ Open }) => (Open ? "0" : "-100%")};
`;

const Blur = ({ Open, toggle, ...props }) => {
  return <Base Open={Open} onClick={toggle} {...props} />;
};

export default Blur;
