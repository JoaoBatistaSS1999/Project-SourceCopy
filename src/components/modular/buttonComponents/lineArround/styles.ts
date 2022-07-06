import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .center {
    width: 180px;
    height: 60px;
    position: absolute;
  }

  .btn {
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #91c9ff;
    outline: none;
    transition: 1s ease-in-out;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  .btn:hover {
    transition: 1s ease-in-out;
    background: #4f95da;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  }

  .btn span {
    color: white;
    font-size: 18px;
    font-weight: 100;
  }
`;
