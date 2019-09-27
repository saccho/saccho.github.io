import React from 'react'
import styled from 'styled-components'
import header from '../../assets/header.jpg'
import Profile from './Profile'
import { Src } from '../data/types/elements'

const Home: React.FC = () => {
  return(
    <div>
      <HeaderImg src={header} />
      <Profile />
    </div>
  )
}

/* Styles */
const HeaderImg = styled.div`
  height: calc((100vw - 80px)*(393/1000));
  background-image: url(${(props: Src) => props.src});
  background-position: top right;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: calc(100vw - 80px);
  filter: grayscale(100%);
  @media only screen and (max-width: 1024px) {
    background-position: 0 50px;
    height: calc(100vw * (393/1000));
    background-size: 100vw;
  }
`

export default Home;
