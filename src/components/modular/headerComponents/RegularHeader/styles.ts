import styled from "styled-components";

export const Navigation = styled.nav`
  height: 60px;
  width: 100%;
  background-color: #1f1d1d;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #ffffff;
  padding: 5px;
`;

export const Container = styled.div`
  border: 1px solid #ffffff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1400px;
  min-height: min-content;
  height: 50px;

  padding: 10px;

  .indexes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h2 {
      --h: 1.2em;
      color: #ffffff;

      line-height: var(--h);
      text-shadow: 0 var(--_t, var(--h)) #fff, 0 0 var(--_c, #000);
      background: linear-gradient(#ffffff 0 0) bottom/100% var(--_d, 0)
        no-repeat;
      overflow: hidden;
      transition: 0.3s;

      &:hover {
        --_d: 100%;
        --_t: 0;
        --_c: #0000;
        color: #000000;
      }

      font-family: system-ui, sans-serif;
      font-size: 3rem;
      margin: 0;
      cursor: pointer;
      padding: 0 0.1em;

      cursor: pointer;
      font-size: 16px;
    }
  }
`;
