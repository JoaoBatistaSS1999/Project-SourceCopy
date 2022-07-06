import styled from "styled-components";

export const Container = styled.button`
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  width: 100%;
  height: 43px;
  border-radius: 12px;

  &:hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    color: #000000;
  }
`;
