import React from 'react';
import styled from 'styled-components';

const conferences = {
  international: [
    {
      authors: 'Satoru Yasukawa, Hideaki Momose, Minseok Kim',
      title: 'Experimental Evaluation of WiFi based Indoor Localization',
      publication: 'IEEE Shinetsu Section Student Branch',
      date: 'Sep. 2019'
    },
    {
      authors: 'Satoru Yasukawa, Minseok Kim',
      title: 'Intruder Detection Using Radio Wave Propagation Characteristics',
      publication: 'IEEE/IEIE ICCE-Asia 2018',
      date: 'Jun. 2018'
    }
  ],
  domestic: [
    {
      authors: 'Satoru Yasukawa, Minseok Kim',
      title: 'Indoor Localization Method using Commercial Off-The-Shelf Wireless LANs',
      publication: '2019 IEICE Society Conference, B-1-126',
      date: 'Sep. 2019'
    },
    {
      authors: 'Satoru Yasukawa, Minseok Kim',
      title: 'Indoor localization Method using Spatio-Temporal Feature of Radio Propagation Characteristics',
      publication: '2019 IEICE General Conference, B-1-140',
      date: 'Mar. 2019'
    },
    {
      authors: 'Satoru Yasukawa, Minseok Kim',
      title: 'A Study on Positioning System with WiFi using Spetiotemporal Feature of Communication Path',
      publication: '2018 IEICE Shinetsu Branch Conference, 4B-3',
      date: 'Sep. 2018'
    },
    {
      authors: '安川悟, 金ミンソク',
      title: '電波伝搬特性を用いた侵入者検出に関する研究',
      publication: '電子情報通信学会 新潟大学 学生ブランチ',
      date: '2017年12月'
    },
  ],
  tech: [
    {
      authors: 'Hideaki Momose, Satoru Yasukawa, Minseok Kim',
      title: 'Developement of MIMO Channel Sounder using Commercial Off-The-Shelf Wireless LANs',
      publication: 'IEICE Technical Report, AP2019-25',
      date: 'Jul. 2019'
    }
  ]
}

const Conference: React.FC = () => {
  const iConfList = []
  const dConfList = []
  const dTechList = []

  for(const confIdx in conferences.international){
    const iConf = conferences.international[confIdx]
    iConfList.push(
      <ConfUl>
        <ConfLi>
          {iConf.authors}, "{iConf.title}," {iConf.publication}, {iConf.date}.
        </ConfLi>
      </ConfUl>
    )
  }
  for(const confIdx in conferences.domestic){
    const dConf = conferences.domestic[confIdx]
    dConfList.push(
      <ConfUl>
        <ConfLi>
          {dConf.authors}, "{dConf.title}," {dConf.publication}, {dConf.date}.
        </ConfLi>
      </ConfUl>
    )
  }
  for(const techIdx in conferences.tech){
    const tech = conferences.tech[techIdx]
    dTechList.push(
      <ConfUl>
        <ConfLi>
          {tech.authors}, "{tech.title}," {tech.publication}, {tech.date}.
        </ConfLi>
      </ConfUl>
    )
  }

  return(
    <Wrapper>
      <Conf>
        International conference
        {iConfList}
      </Conf>
      <Conf>
        Domestic conference (Japanese)
        {dConfList}
      </Conf>
      <Conf>
        IEICE Technical Reports (Japanese)
        {dTechList}
      </Conf>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.div`
  padding: 0;
`

const Conf = styled.div`
  margin: 16px 0;
`

const ConfUl = styled.ul`
  padding-left: 30px;
`

const ConfLi = styled.li`
  width: 100%;
`

export default Conference;
