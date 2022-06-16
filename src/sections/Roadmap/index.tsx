import React from "react";
import RoadmapColumn from "../../components/roadmapColumn/index";
import { Container } from "./styles";

import { Q1, Q2, Q3, Q4 } from "./roadmapData";

const Roadmap: React.FC = () => {
  return (
    <Container id='roadmap'>
      <h2>Our Roadmap for 2022</h2>
      <div className='item-container'>
        <RoadmapColumn title={Q1.title} items={Q1.info} />
        <RoadmapColumn title={Q2.title} items={Q2.info} />
        <RoadmapColumn title={Q3.title} items={Q3.info} />
        <RoadmapColumn title={Q4.title} items={Q4.info} />
      </div>
    </Container>
  );
};
export default Roadmap;
