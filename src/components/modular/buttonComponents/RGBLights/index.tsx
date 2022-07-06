import React from "react";
import { Container } from "./styles";
import { ButtonCard } from "../../UI/buttonContainer/styles";

const RGBButton: React.FC = () => {
  return (
    <ButtonCard>
      <Container>RGB Lights</Container>
    </ButtonCard>
  );
};
export default RGBButton;
