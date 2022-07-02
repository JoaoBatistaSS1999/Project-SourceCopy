import { Container, Navigation } from "./styles";

function Header() {
  return (
    <Navigation>
      <Container>
        <div>
          <h1>Logo</h1>
        </div>
        <div className='indexes'>
          <h2>project</h2>
          <h2>tecnology</h2>
          <h2>resources</h2>
          <h2>contact</h2>
          <h2>team</h2>
        </div>
      </Container>
    </Navigation>
  );
}

export default Header;
