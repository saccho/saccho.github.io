import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo2.png';

type StyleProps = {
  src: string;
}

const Header: React.FC = () => {
  return(
    <Wrapper>
      <Title to="/">
        <TitleImg src={logo} />
        <Name>Satoru Yasukawa's<br/>Portfolio</Name>
      </Title>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #F5F5F5;
  width: 100vw;
  height: 50px;
  text-align: center;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

const Title = styled(Link)`
  height: 100%;
  color: #212121;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TitleImg = styled.img`
  margin: 0 10px;
  src: url(${(props: StyleProps) => props.src});
  width: 48px;
  height: 48px;
`

const Name = styled.h1`
  color: #424242;
  font-size: 20px;
  margin: 0;
`

export default Header;
