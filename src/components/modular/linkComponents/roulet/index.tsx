import React from "react";
import { Container } from "./styles";

const RouletLink: React.FC = () => {
  return (
    <Container>
      <p>
        Hover
        <a href='/' id='style-2' data-replace='this link'>
          <span>this link</span>
        </a>
      </p>
    </Container>
  );
};
export default RouletLink;
