import React from "react";
import styled from "styled-components";
import { Event } from "./GATracker";

type Props = {
  name: string;
  href: string;
  iconURL: string;
};

const SNSLink: React.FC<Props> = props => {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => Event("Profile", "Linked", props.name)}
    >
      <Img src={props.iconURL} />
    </Link>
  );
};

/* Styles */
const Img = styled.img`
  width: 17px;
  height: 17px;
`;

const Link = styled.a`
  margin: 0 10px;
  transition: 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;

export default SNSLink;
