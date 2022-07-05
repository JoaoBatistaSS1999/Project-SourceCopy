import React from "react";
import BlurryEffect from "../../components/modular/buttonComponents/blurryEffect";
import CartoonishButton from "../../components/modular/buttonComponents/cartoonish";
import DoubleLayer from "../../components/modular/buttonComponents/doubleLayer";
import { GlitchedButton } from "../../components/modular/buttonComponents/glitched/styles";
import { Container } from "./styles";
import WiggleButton from "../../components/modular/buttonComponents/wiggleEffect/index";
import ShineButton from "../../components/modular/buttonComponents/shineThrought";
import PulseButton from "../../components/modular/buttonComponents/pulseEffect";
import RegularButton from "../../components/modular/buttonComponents/regularClick";

const ButtonSection: React.FC = () => {
  return (
    <Container>
      <DoubleLayer />
      <BlurryEffect />
      {/* <GlitchedButton /> ironically, its not working*/}
      <CartoonishButton />
      <WiggleButton />
      <ShineButton />
      <PulseButton />
      <RegularButton />
    </Container>
  );
};
export default ButtonSection;
