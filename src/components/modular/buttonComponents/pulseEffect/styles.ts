import styled from "styled-components";

export const Container = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #cf3790;
  width: 100%;
  height: 43px;
  color: #ffffff;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 4px solid #cf3790;
    border-radius: 10px;
    transform-origin: center;
    transform: scale(1);
  }

  &:hover::before {
    transition: all 1s ease-in-out;
    transform-origin: center;
    transform: scale(1.3);
    opacity: 0;
  }
`;
