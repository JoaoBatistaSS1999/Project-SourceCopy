import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Selector } from "./styles";

const DefaultHeader: React.FC = () => {
  return (
    <Container>
      <NavLink to='/headers'>
        <Selector>Headers</Selector>
      </NavLink>
      <NavLink to='/footers' className='testing'>
        <Selector>Footers</Selector>
      </NavLink>
      <NavLink to='/buttons' className='testing'>
        <Selector>Buttons</Selector>
      </NavLink>
      <NavLink to='/roadmaps' className='testing'>
        <Selector>Roadmaps</Selector>
      </NavLink>
      <NavLink to='/social' className='testing'>
        <Selector>Social</Selector>
      </NavLink>
      <NavLink to='/inputs' className='testing'>
        <Selector>Inputs</Selector>
      </NavLink>
      <NavLink to='/links' className='testing'>
        <Selector>Links</Selector>
      </NavLink>
      <NavLink to='/fields' className='testing'>
        <Selector>Fields</Selector>
      </NavLink>
    </Container>
  );
};

export default DefaultHeader;
