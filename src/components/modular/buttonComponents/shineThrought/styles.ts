import styled from "styled-components";

export const Container = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: 43px;
  color: #ffffff;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-700%, 0, 0) rotate(35deg);
    // -700% is the right amount for this button size, if you want
    // the effect to start earlier of further change it. This is
    // basically where the "shine line" starts.
  }

  &:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(300%, 0, 0) rotate(35deg);
    // This is where the "shine line" will end, change according
    // to the width of the button.
  }
`;
