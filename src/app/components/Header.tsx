import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import siteInfo from "../data/values/siteInfo";
import { barBackground, mainText } from "../data/colors/elements";
import { Color, Src } from "../data/types/elements";

const Header: React.FC = () => {
  return (
    <Wrapper color={barBackground}>
      <Title to="/" color={mainText}>
        <TitleImg src={siteInfo.logo} />
        <Name>
          Satoru Yasukawa's
          <br />
          Portfolio
        </Name>
      </Title>
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${(props: Color) => props.color};
  width: 100vw;
  height: 50px;
  text-align: center;
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;

const Title = styled(Link)`
  height: 100%;
  color: ${(props: Color) => props.color};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleImg = styled.img`
  margin: 0 10px;
  src: url(${(props: Src) => props.src});
  width: 48px;
  height: 48px;
`;

const Name = styled.h1`
  font-size: 20px;
  margin: 0;
`;

export default Header;
