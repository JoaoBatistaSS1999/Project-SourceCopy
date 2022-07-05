import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #407efb;
  border: none;
  border-bottom: 6px solid #001fff;
  padding: 16px;
  border-radius: 4px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 0px;
  transition: all 0.1s;
  outline: none;
  width: 100%;
  height: 43px;

  &:hover {
    margin-top: 2px;
    border-bottom-width: 3px;
    cursor: pointer;
  }
  &:active {
    margin-top: 5px;
    border-bottom-width: 0px;
  }
`;
