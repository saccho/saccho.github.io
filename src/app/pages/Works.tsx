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

const defaultColor = '#424242'
const languages = {
  python: {
    name: 'Python',
    color: '#3572A5'
  },
  matlab: {
    name: 'MATLAB',
    color: '#MATLAB'
  },
  kotlin: {
    name: 'Kotlin',
    color: '#F18E33'
  },
  go: {
    name: 'Go',
    color: '#00ADD8'
  },
  js: {
    name: 'JavaScript',
    color: '#F1E05A'
  },
  ts: {
    name: 'TypeScript',
    color: '#2B7489'
  },
  html: {
    name: 'HTML5',
    color: '#E34C26'
  },
  css: {
    name: 'CSS3',
    color: '#563D7C'
  },
  vue: {
    name: 'Vue.js',
    color: defaultColor
  },
  react: {
    name: 'React',
    color: defaultColor
  },
  node: {
    name: 'Node.js',
    color: defaultColor
  },
}

const works = [
  {
    title: '長岡花火 公式アプリ',
    imgPath: nagaoka,
    url: 'https://play.google.com/store/apps/details?id=io.joren.nagaokamatsuri',
    description: 'Product: Fuller, Inc. (joind as an Android engineer part-time job)',
    languages: [languages.kotlin],
  },
  {
    title: 'Portfolio Site (This site)',
    imgPath: newPortfolio,
    url: 'https://github.com/saccho/saccho.github.io',
    description: 'Personal work',
    languages: [languages.react, languages.ts]
  },
  {
    title: 'Artist Network',
    imgPath: artistNetwork,
    url: 'https://github.com/saccho/artists-network-front',
    description: 'Personal work',
    languages: [languages.vue, languages.js, languages.python]
  },
  {
    title: 'Portfolio Site (Old)',
    imgPath: oldPortfolio,
    url: 'https://github.com/saccho/saccho.github.io',
    description: 'Personal work',
    languages: [languages.vue, languages.js]
  },
  {
    title: 'Auto CloudRT',
    imgPath: autoCloudRT,
    url: 'https://github.com/saccho/auto-cloudRT',
    description: 'Personal work (for study)',
    languages: [languages.python]
  },
  {
    title: 'KAWAYA',
    imgPath: kawaya,
    url: 'https://github.com/ExciteJapanPub/summer-intern-2018-blockchain-fabric',
    description: 'Internship: Excite Japan Co., Ltd.',
    languages: [languages.go, languages.js, languages.python, languages.node]
  },
  {
    title: 'LINE BOT',
    imgPath: linebot,
    url: 'https://github.com/saccho/my_linebot',
    description: 'Personal work',
    languages: [languages.python]
  },
]

const Works: React.FC = () =>{
  const workList = []
  for(const i in works) {
    workList.push(
    <WorkCard title={works[i].title} imgSrc={works[i].imgPath} 
      url={works[i].url} 
      description={works[i].description}
      languages={works[i].languages}
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
  margin: 15px 0;
  text-align: center;
`

export default Works;
