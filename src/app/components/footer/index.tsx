import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
        flex
        flex-col
        min-w-full
        pt-10
        md:pt-16
        pb-10
        md:pb-16
        items-center
        justify-center
    `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    justify-center
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-12

    self-center
    md:self-start
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
    text-center
    md:text-left
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    py-5
    pr-5
    md:mr-16
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
    items-center
    md:items-start
  `}
`;

const LinksContainer = styled.div`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};

  & > a {
    ${tw`
      text-sm
      text-white
      transition-all
      hover:text-red-500
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-white
    mb-3
    mx-auto
    md:mx-0
    items-center
    md:items-start
  `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const RedIcon = styled.span`
  ${tw`
    cursor-pointer
    w-10
    h-10
    rounded-full
    transition-all
    bg-red-500
    hover:bg-red-600
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-white
    text-sm
  `}
`;

const LogoContainer = styled.div`
  ${tw`
    self-center
    md:self-start
  `}
`;

const BottomContainer = styled.div`
  ${tw`
  pt-12
    flex
  `}
`;

const CopyRightText = styled.span`
  font-size: 11px;
  ${tw`
    text-gray-400
  `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <LogoContainer>
            <Logo color="white" />
          </LogoContainer>
          <AboutText>
            Yourcar is a car rental & selling company located in many coutnries
            across the world which has high quality cars and top rated services.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>

          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>

          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms & Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>0161-324-6745</SmallText>
          </HorizontalContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>E-mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.co.uk</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyRightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyRightText>
      </BottomContainer>
    </FooterContainer>
  );
}
