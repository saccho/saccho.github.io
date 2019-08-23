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
      <a
        className={pages[i].name}
        href={pages[i].ref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {pages[i].name}
      </a>
    </li>)
  }

  return(
    <Wrapper>
      <h1 className='Title'>Title</h1>
      <PageList>
        {list}
      </PageList>
      <Copyright>
        (c) {date.getFullYear()} Satoru Yasukawa.
      </Copyright>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  width: 220px;
  height: 100vh;
`

const PageList = styled.ul`
  list-style: none;
`

const Copyright = styled.div`
  margin: 10px 0;
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
`

export default Sidebar;
