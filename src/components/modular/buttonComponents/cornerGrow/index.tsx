import React from "react";
import { ButtonCard } from "../../UI/buttonContainer/styles";
import { Container } from "./styles";

const GrowCorner: React.FC = () => {
  return (
    <Container>
      <button className='btn'>
        <span>Hover me!</span>
      </button>
    </Container>
  );
};
export default GrowCorner;
