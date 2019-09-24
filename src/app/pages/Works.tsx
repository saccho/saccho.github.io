import React from 'react';
import styled from 'styled-components';
import WorkCard from '../components/WorkCard';
import nagaoka from '../../assets/works/nagaokamatsuri.jpg';
import newPortfolio from '../../assets/works/newPortfolio.jpg';
import artistNetwork from '../../assets/works/artistNetwork.jpg';
import oldPortfolio from '../../assets/works/oldPortfolio.jpg';
import kawaya from '../../assets/works/kawaya.jpg';
import autoCloudRT from '../../assets/works/autoCloudRT.jpg';
import linebot from '../../assets/works/linebot.jpg';

const works = [
  {
    title: '長岡花火 公式アプリ',
    imgPath: nagaoka,
    url: 'https://play.google.com/store/apps/details?id=io.joren.nagaokamatsuri',
    description: 'Product: Fuller, Inc. (joind as an Android engineer part-time job)'
  },
  {
    title: 'Portfolio Site (This site)',
    imgPath: newPortfolio,
    url: 'https://github.com/saccho/saccho.github.io',
    description: 'Personal work'
  },
  {
    title: 'Artist Network',
    imgPath: artistNetwork,
    url: 'https://github.com/saccho/artists-network-front',
    description: 'Personal work'
  },
  {
    title: 'Portfolio Site (Old)',
    imgPath: oldPortfolio,
    url: 'https://github.com/saccho/saccho.github.io',
    description: 'Personal work'
  },
  {
    title: 'Auto CloudRT',
    imgPath: autoCloudRT,
    url: 'https://github.com/saccho/auto-cloudRT',
    description: 'Personal work (for study)'
  },
  {
    title: 'KAWAYA',
    imgPath: kawaya,
    url: 'https://github.com/ExciteJapanPub/summer-intern-2018-blockchain-fabric',
    description: 'Internship: Excite Japan Co., Ltd.'
  },
  {
    title: 'LINE BOT',
    imgPath: linebot,
    url: 'https://github.com/saccho/my_linebot',
    description: 'Personal work'
  },
]

const Works: React.FC = () =>{
  const workList = []
  for(const i in works) {
    workList.push(
    <WorkCard title={works[i].title} imgSrc={works[i].imgPath} 
      url={works[i].url} 
      description={works[i].description}
    />)
  }
  return(
    <div>
      <Wrapper>
        {workList}
      </Wrapper>
    </div>
  )
}

/* Styles */
const Wrapper = styled.div`
  text-align: center;
`

export default Works;
