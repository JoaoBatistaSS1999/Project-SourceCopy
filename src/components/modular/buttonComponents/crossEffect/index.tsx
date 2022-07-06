import React from "react";
import { ButtonCard } from "../../UI/buttonContainer/styles";
import { Container } from "./styles";

const CrossEffect: React.FC = () => {
  return (
    <ButtonCard>
      <Container>
        <div className='box-2'>
          <div className='btn btn-two'>
            <span>HOVER ME</span>
          </div>
        </div>
      </Container>
    </ButtonCard>
  );
};
export default CrossEffect;
