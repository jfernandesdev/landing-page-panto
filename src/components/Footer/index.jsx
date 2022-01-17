import React from 'react';

import LogoPanto from '../../assets/images/logo-panto.svg';

import {
  Container,
  Wrapper,
  Logo,
  List,
  ListItem,
  SubtitleFooter,
  LinkFooter,
  Credits,
  Copy
} from './styles';

import {Facebook, Twitter, Instagram} from '../../styles/Icons';

function Footer() {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo src={LogoPanto} alt='Panto' />
          <p>
            The advantage of hiring a workspace with <br />
            us is that givees you comfortable service <br /> and all-around
            facilities.
          </p>
        </Wrapper>

        <Wrapper>
          <List>
            <SubtitleFooter>Services</SubtitleFooter>
            <ListItem>
              <LinkFooter href='#'>Email Marketing</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href='#'>Campaigns</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href='#'>Branding</LinkFooter>
            </ListItem>
          </List>
        </Wrapper>

        <Wrapper>
          <List>
            <SubtitleFooter>Furniture</SubtitleFooter>
            <ListItem>
              <LinkFooter href='#'>Chair</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href='#'>Beds</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href='#'>All</LinkFooter>
            </ListItem>
          </List>
        </Wrapper>

        <Wrapper>
          <List>
            <SubtitleFooter>Follow Us</SubtitleFooter>
            <ListItem>
              <LinkFooter href='#'><Facebook />Facebook</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href='#'><Twitter />Twitter</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href='#'><Instagram /> Instagram</LinkFooter>
            </ListItem>
          </List>
        </Wrapper>
      </Container>
      <Credits>
        <Copy>Copyright &copy; 2022</Copy>
        <div>
          <LinkFooter href='#'>Terms &amp; Conditions</LinkFooter>
          <LinkFooter href='#'>Privacy Policy</LinkFooter>
        </div>
      </Credits>
    </>
  );
}

export default Footer;
