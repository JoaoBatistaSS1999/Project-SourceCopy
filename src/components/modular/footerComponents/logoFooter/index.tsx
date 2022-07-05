import React from "react";
import { Container } from "./styles";
import discord from "../../../../assets/logos/discord.png";
import telegram from "../../../../assets/logos/telegram.png";
import medium from "../../../../assets/logos/medium.png";
import reddit from "../../../../assets/logos/reddit.png";
import twitter from "../../../../assets/logos/twitter.png";
import github from "../../../../assets/logos/github.png";

import Column from "./column";
import Icon from "./iconsList";
import { sections, documentation, about, ecosystem } from "./columnData";

const LogoFooter: React.FC = () => {
  return (
    <Container>
      <div className='information'>
        <div className='logo'>
          <h2>Logo</h2>
          <p>Future is web3</p>
        </div>

        <section className='indexes'>
          <Column title={"About"} items={about} />
          <Column title={"Sessions"} items={sections} />
          <Column title={"Ecosystem"} items={ecosystem} />
          <Column title={"Documentation"} items={documentation} blank={true} />
        </section>
      </div>

      <ul className='icons'>
        <Icon link={"https://cosmos.network/"} icon={discord} alt='discord' />
        <Icon link={"https://cosmos.network/"} icon={telegram} alt='telegram' />
        <Icon link={"https://cosmos.network/"} icon={medium} alt='medium' />
        <Icon link={"https://cosmos.network/"} icon={reddit} alt='reddit' />
        <Icon link={"https://cosmos.network/"} icon={twitter} alt='twitter' />
        <Icon link={"https://cosmos.network/"} icon={github} alt='github' />
      </ul>

      <div className='email'>
        <span>suport at yourteamemail@server.com</span>
      </div>
    </Container>
  );
};
export default LogoFooter;
