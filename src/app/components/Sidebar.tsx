import React from 'react';
import styled from 'styled-components';

const pages = [
  {name: "Profile", ref: "https://reactjs.org"},
  {name: "Works", ref: "https://reactjs.org"},
  {name: "Contact", ref: "https://reactjs.org"}
]

const Sidebar: React.FC = () => {
  const date = new Date()
  const list = []
  for(const i in pages){
    list.push(<li>
      <PageLink
        className={pages[i].name}
        href={pages[i].ref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {pages[i].name}
      </PageLink>
    </li>)
  }

  return(
    <Wrapper>
      <Title href={pages[0].ref}>Satoru Yasukawa's Portfolio</Title>
      <PageList>
        {list}
      </PageList>
      <Copyright>
        (c) {date.getFullYear()} Satoru Yasukawa.
      </Copyright>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 220px;
  height: 100vh;
  text-align: center;
`

const Title = styled.a`
  display: inline-block;
  color: #212121;
  font-size: 20px;
  text-decoration: none;
  margin-top: 30px;
`

const PageList = styled.ul`
  padding: 0;
  list-style: none;
`

const PageLink = styled.a`
  font-size: 17px;
  padding: 5px;
  margin: 5px 0;
  color: #212121;
  text-decoration: none;
  display: inline-block;
  position: relative;
  &::after{
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #212121;
    transition: all 0.15s ease 0s;
  }
  &:hover::after {
    width: 100%;
  }
`

const Copyright = styled.div`
  font-size: 12px;
  margin: 10px 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

export default Sidebar;
