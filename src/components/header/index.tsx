import React from "react";
import Button from "../UI/button";
import { Container, Navigation } from "./styles";

function Header() {
  return (
    <Navigation>
      <Container>
        <div>
          <h1>HireMe.io</h1>
        </div>
        <div>
          <Button />
        </div>
      </Container>
    </Navigation>
  );
}

export default Header;
