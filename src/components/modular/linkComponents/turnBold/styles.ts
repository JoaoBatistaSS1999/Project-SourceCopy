import styled from "styled-components";

export const Container = styled.div`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-size: 5vw;
    font-weight: 100;
  }

  a {
    color: #000;
    text-decoration: none;
    span {
      font-weight: 100;
      transition: all 0.5s;
      border-bottom: 1px solid;
    }
    span:nth-child(2) {
      transition-delay: 0.1s;
    }
    span:nth-child(3) {
      transition-delay: 0.2s;
    }
    span:nth-child(4) {
      transition-delay: 0.3s;
    }
    &:hover {
      span {
        font-weight: 700;
      }
      span:nth-child(4) {
        transition-delay: 0.3s;
      }
      span:nth-child(3) {
        transition-delay: 0.2s;
      }
      span:nth-child(2) {
        transition-delay: 0.1s;
      }
      span:nth-child(1) {
        transition-delay: 0s;
      }
    }

    &.hover-shadow {
      &:hover {
        $color: #ddd;
        text-shadow: 1px 1px 0px $color, 2px 2px 0px $color, 3px 3px 0px $color;
      }
    }
    &.hover-color {
      &:hover {
        $color: #ddd;
        //color: darkmagenta;
        border-color: darkmagenta;
      }
    }
  }
`;
