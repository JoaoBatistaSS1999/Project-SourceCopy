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
import VerticalLines from "../../components/modular/buttonComponents/verticalLines";
import NeonButton from "../../components/modular/buttonComponents/neonLight";
import RGBButton from "../../components/modular/buttonComponents/RGBLights";
import CrossEffect from "../../components/modular/buttonComponents/crossEffect";
import LineArround from "../../components/modular/buttonComponents/lineArround";
import GrowCorner from "../../components/modular/buttonComponents/cornerGrow";
import BubbleButton from "../../components/modular/buttonComponents/bubbles";
import ArrowButton from "../../components/modular/buttonComponents/next";

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
      <VerticalLines />
      <NeonButton />
      <RGBButton />
      {/* <CrossEffect /> */}
      {/* <LineArround /> */}
      <GrowCorner />
      {/* <BubbleButton /> */}
      <ArrowButton />
    </Container>
  );
};
export default ButtonSection;
