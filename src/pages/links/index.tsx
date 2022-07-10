import React from "react";
import RouletLink from "../../components/modular/linkComponents/roulet";
import TurnBold from "../../components/modular/linkComponents/turnBold";
import { Container } from "./styles";

const LinksSection: React.FC = () => {
  return (
    <Container>
      <RouletLink />
      <TurnBold />
    </Container>
  );
};
export default LinksSection;
