import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hello! My name is Roger Chung I am a Electromechanical Engineer and Full Stack Developer.
          Experienced Web Developer with a focus on Angular/React and Node.js. Specialized in building applications for the Internet of Things (IoT), I have a strong background in working with IoT platforms like ThingsBoard and managing brokers using EMQX. My expertise includes programming microcontrollers using C/C++, sensor management, and deploying applications using Docker.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;