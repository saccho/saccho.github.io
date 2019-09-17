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
      authors: '安川悟, 金ミンソク',
      title: '市販の無線LANを用いた屋内測位法の検討',
      publication: '電子情報通信学会ソサイエティ大会 B-1-126',
      date: '2019年9月'
    },
    {
      authors: '安川悟, 金ミンソク',
      title: '無線通信路の時空間特徴量を用いた屋内測位法の検討',
      publication: '電子情報通信学会総合大会 B-1-140',
      date: '2019年3月'
    },
    {
      authors: '安川悟, 金ミンソク',
      title: '通信路の時空間特徴量を用いたWiFi測位システムの検討',
      publication: '電子情報通信学会信越支部大会 4B-3',
      date: '2018年9月'
    },
    {
      authors: '安川悟, 金ミンソク',
      title: '電波伝搬特性を用いた侵入者検出に関する研究',
      publication: '電子情報通信学会 新潟大学 学生ブランチ',
      date: '2017年12月'
    },
  ]
}

const Conference: React.FC = () => {
  const iConfList = []
  const dConfList = []

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
  for(const i in conferences.domestic){
    const dConf = conferences.domestic[i]
    dConfList.push(
      <ConfUl>
        <ConfLi>
          {dConf.authors}, "{dConf.title}," {dConf.publication}, {dConf.date}.
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
        Domestic conference
        {dConfList}
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
