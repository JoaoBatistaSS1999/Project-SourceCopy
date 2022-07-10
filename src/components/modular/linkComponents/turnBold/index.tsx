import React from "react";
import { Container } from "./styles";

const TurnBold: React.FC = () => {
  return (
    <Container>
      <div className='wrapper'>
        <div className='inner'>
          thin
          <a
            href='https://www.youtube.com/'
            className='hover-shadow hover-color'
            target='_blank'
            rel='noreferrer'>
            <span>l</span>
            <span>i</span>
            <span>n</span>
            <span>k</span>
          </a>
          turns bold
        </div>
      </div>
    </Container>
  );
};
export default TurnBold;
