import React from "react";
import styled from "styled-components";
import ItsMe from "../components/ItsMe";
import ProfileCard from "../components/ProfileCard";
import Experiences from "../components/Experiences";
import Education from "../components/Education";
import Skills from "../components/Skills";
import OtherSkills from "../components/OtherSkills";
import Conferences from "../components/Conferences";
import Awards from "../components/Awards";

const Profile: React.FC = () => {
  return (
    <div>
      <ItsMe />
      <DescriptionWrapper>
        <Description>
          <ProfileCard title="EXPERIENCES">
            <Experiences />
          </ProfileCard>
          <ProfileCard title="EDUCATION">
            <Education />
          </ProfileCard>
          <ProfileCard title="STUDY">
            <Conferences />
          </ProfileCard>
          <ProfileCard title="AWARDS">
            <Awards />
          </ProfileCard>
        </Description>
        <Description>
          <ProfileCard title="SKILLS">
            <Skills />
          </ProfileCard>
          <ProfileCard title="FIELD / KNOWLEDGE">
            <OtherSkills />
          </ProfileCard>
        </Description>
      </DescriptionWrapper>
    </div>
  );
};

/* Styles */
const DescriptionWrapper = styled.div`
  display: flex;
  text-align: left;
  @media only screen and (max-width: 1023px) {
    display: inline-block;
  }
`;

const Description = styled.div`
  width: calc(50% - 10px);
  margin: 0 10px 0 0;
  @media only screen and (max-width: 1023px) {
    width: 100%;
    margin: 0;
  }
`;

export default Profile;
