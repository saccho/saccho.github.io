import React from "react";
import styled from "styled-components";
import List from "../components/List";
import conferences from "../data/values/study";

const Conferences: React.FC = () => {
  const iConfList: string[] = [];
  const dConfList: string[] = [];
  const techList: string[] = [];

  for (const i in conferences.international.papers) {
    const iConf = conferences.international.papers[i];
    iConfList.push(
      `${iConf.authors}, "${iConf.title}," ${iConf.publication}, ${iConf.date}.`
    );
  }
  for (const i in conferences.domestic.papers) {
    const dConf = conferences.domestic.papers[i];
    dConfList.push(
      `${dConf.authors}, "${dConf.title}," ${dConf.publication}, ${dConf.date} (${dConf.language}).`
    );
  }
  for (const i in conferences.tech.papers) {
    const tech = conferences.tech.papers[i];
    techList.push(
      `${tech.authors}, "${tech.title}," ${tech.publication}, ${tech.date}.`
    );
  }

  return (
    <Wrapper>
      <List title={conferences.international.description}>{iConfList}</List>
      <List title={conferences.domestic.description}>{dConfList}</List>
      <List title={conferences.tech.description}>{techList}</List>
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.div`
  margin: 16px 0;
  padding: 0;
`;

export default Conferences;
