import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #000000;
  padding: 30px 10px;
  gap: 20px;

  @media (max-width: 400px) {
    padding: 30px 0px;
  }

  h2 {
    border: 1px solid #e71dcf;
    font-size: 40px;

    @media (max-width: 700px) {
      font-size: 30px;
    }

    @media (max-width: 400px) {
      font-size: 22px;
    }
  }

  .item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
`;
