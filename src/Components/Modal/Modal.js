import React from "react";
import styled from "styled-components";
import Blur from "./Blur";

const Sidemodal = styled.div`
  color: #fff;
  position: fixed;
  z-index: 500;
  width: 35%;
  height: 100vh;
  background: #2e2e2e;
  display: grid;
  box-shadow: 2px 0px 4px rgba(158, 158, 158, 0.4);
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ Open }) => (Open ? "100%" : "0")};
  right: ${({ Open }) => (Open ? "0" : "-100%")};

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .box {
    padding: 20px;
  }
`;

const Modal = ({ Open, toggle, children, ...props }) => {
  return (
    <div>
      <Blur Open={Open} toggle={toggle} />
      <Sidemodal Open={Open} {...props}>
        {children}
      </Sidemodal>
    </div>
  );
};

export default Modal;
