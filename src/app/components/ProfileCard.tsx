import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
}

const ProfileCard: React.FC<Props> = (props) => {
  return(
    <Card>
      <Title>{props.title}</Title>
      {props.children}
    </Card>
  );
}

/* Styles */
const Title = styled.h3`
  color: #424242;
  margin: 0;
  position: relative;
`

const Card = styled.div`
  border-top: 1px solid #E0E0E0;
  margin: 0 10px 0 0;
  padding: 10px 0 10px 10px;
`

export default ProfileCard;
