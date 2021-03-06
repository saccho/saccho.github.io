import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import siteInfo from "../data/values/siteInfo";
import {
  barBackground,
  barBackgroundHover,
  mainText
} from "../data/colors/elements";
import { Color, Src } from "../data/types/elements";

const Footer: React.FC = () => {
  const list = [];
  for (const i in siteInfo.pages) {
    list.push(
      <PageLi key={i} color={barBackgroundHover}>
        <PageLink to={siteInfo.pages[i].path} color={mainText}>
          <PageImg src={siteInfo.pages[i].iconUrl} />
          <PageName>{siteInfo.pages[i].name}</PageName>
        </PageLink>
      </PageLi>
    );
  }

  return (
    <Wrapper color={barBackground}>
      <PageUl>{list}</PageUl>
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.div`
  background-color: ${(props: Color) => props.color};
  position: sticky;
  bottom: 0;
  width: 100vw;
  height: 50px;
  text-align: center;
  z-index: 2;
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;

const PageLi = styled.li`
  width: calc(100% / 3);
  height: 100%;
  display: inline-block;
  transition: background-color 0.1s;
  &:hover {
    background-color: ${(props: Color) => props.color};
  }
`;

const PageImg = styled.img`
  src: url(${(props: Src) => props.src});
  width: 24px;
  height: 24px;
  padding-top: 5px;
`;

const PageName = styled.p`
  margin: 0;
  font-size: 12px;
`;

const PageUl = styled.ul`
  width: 100%;
  height: 100%;
  display: inline-block;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const PageLink = styled(Link)`
  height: 100%;
  color: ${(props: Color) => props.color};
  text-decoration: none;
  display: block;
`;

export default Footer;
