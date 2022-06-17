import styled from "styled-components";

export const Container = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 10px;
  gap: 20px;
  border: 1px solid #ff00dd;

  @media (max-width: 400px) {
    padding: 10px 0;
    gap: 20px 0px;
  }

  .information {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;

    .logo {
      width: 200px;
      border: 1px solid blue;
      padding: 10px;

      @media (max-width: 400px) {
        font-size: 12px;
      }
    }

    .indexes {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 10px;
      justify-content: center;
      flex-wrap: wrap;

      @media (max-width: 400px) {
        padding: 10px 0;
        gap: 5px;
      }
    }
  }

  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;

    width: 100%;
    border: 1px solid #d70fb2;
  }

  .email {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px 0;
    border-top: 1px solid #000000;

    @media (max-width: 700px) {
      font-size: 14px;
    }
    @media (max-width: 400px) {
      font-size: 12px;
    }
    @media (max-width: 320px) {
      font-size: 10px;
    }
  }
`;
