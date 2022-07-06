import React from "react";
import { ButtonCard } from "../../UI/buttonContainer/styles";
import { Container } from "./styles";

const LineArround: React.FC = () => {
  return (
    <ButtonCard>
      <Container>
        <div className='center'>
          <button className='btn'>
            <svg viewBox='0 0 180 60' className='border'>
              <polyline
                points='179,1 179,59 1,59 1,1 179,1'
                className='bg-line'
              />
              <polyline
                points='179,1 179,59 1,59 1,1 179,1'
                className='hl-line'
              />
            </svg>
            <span>HOVER ME</span>
          </button>
        </div>
      </Container>
    </ButtonCard>
  );
};
export default LineArround;
