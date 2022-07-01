import React from "react";
import BlurryEffect from "../../components/modular/buttonComponents/blurryEffect";
import CartoonishButton from "../../components/modular/buttonComponents/cartoonish";
import DoubleLayer from "../../components/modular/buttonComponents/doubleLayer";
import { GlitchedButton } from "../../components/modular/buttonComponents/glitched/styles";
import { Container } from "./styles";

const ButtonSection: React.FC = () => {
  return (
    <Container>
      <DoubleLayer />
      <BlurryEffect />
      {/* <GlitchedButton /> ironically, its not working*/}
      <CartoonishButton />
    </Container>
  );
};
export default ButtonSection;
