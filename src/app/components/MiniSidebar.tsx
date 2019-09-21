import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
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

const MiniSidebar: React.FC = () => {
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
      <Title to="/"><TitleImg src={logo} /></Title>
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
  top: 0;
  width: 80px;
  height: 100vh;
  text-align: center;
`

const Title = styled(Link)`
  display: inline-block;
  margin-top: 30px;
`

const TitleImg = styled.img`
  src: url(${(props: StyleProps) => props.src});
  width: 64px;
  height: 64px;
`

const PageLi = styled.li`
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
  padding: 0;
  list-style: none;
`

const PageLink = styled(Link)`
  width: 100%;
  padding: 15px 0;
  color: #212121;
  text-decoration: none;
  display: inline-block;
  position: relative;
`

export default MiniSidebar;
