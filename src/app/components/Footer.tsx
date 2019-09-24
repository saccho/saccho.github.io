import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import profileIcon from '../../assets/icons/profile.png';
import worksIcon from '../../assets/icons/works.png';
import contactIcon from '../../assets/icons/contact.png';

type StyleProps = {
  src: string;
}

const pages = [
  {name: "Profile", path: "/", iconUrl: profileIcon},
  {name: "Works", path: "/works", iconUrl: worksIcon},
  {name: "Contact", path: "/contact", iconUrl: contactIcon}
]

const Footer: React.FC = () => {
  const list = []
  for(const i in pages){
    list.push(<PageLi>
      <PageLink to={pages[i].path}>
        <PageImg src={pages[i].iconUrl} />
        <PageName>{pages[i].name}</PageName>
      </PageLink>
    </PageLi>)
  }

  return(
    <Wrapper>
      <PageUl>
        {list}
      </PageUl>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.div`
  background-color: #F5F5F5;
  position: sticky;
  bottom: 0;
  width: 100vw;
  height: 55px;
  text-align: center;
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`

const PageLi = styled.li`
  width : calc(100% / 3);
  height: calc(100% - 5px);
  padding-top: 5px;
  display: inline-block;
  transition: background-color .1s;
  &:hover{
    background-color: #EEEEEE;
  }
`

const PageImg = styled.img`
  src: url(${(props: StyleProps) => props.src});
  width: 24px;
  height: 24px;
`

const PageName = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
`

const PageUl = styled.ul`
  width: 100vw;
  height: 100%;
  display: inline-block;
  padding: 0;
  margin: 0;
  list-style: none;
`

const PageLink = styled(Link)`
  color: #212121;
  text-decoration: none;
  display: block;
  position: relative;
`

export default Footer;
