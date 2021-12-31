import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FiServer, FiDatabase } from 'react-icons/fi';
import { CgData, CgTerminal } from 'react-icons/cg';
import { BiCloudUpload } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development and IoT world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with: <br />
            - React<br />
            - NextJS<br />
            - Html, Javascript, CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FiServer size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - Node<br />
            - Django<br />
            - Python<br />
            - PHP<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - Mongo DB <br />
            - Mysql <br />
            - PostgreSQL <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <CgData size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MQTT Broker</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - EMQX<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BiCloudUpload size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud Service</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - Microsoft Azure<br />
            - Amazon Web Services <br />
            - Heroku <br />
            - Digital Ocean <br />
            - GitHub Pages <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <CgTerminal size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Sotware</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - Linux Ubuntu<br />
            - Vs Code <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
