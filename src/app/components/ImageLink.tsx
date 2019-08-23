import React from 'react';
import styled from 'styled-components';

type Props = {
  className: string;
  href: string;
  iconURL: string;
}

const ImageLink: React.FC<Props> = (props) => {
  return(
    <a
      className={props.className}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img src={props.iconURL} />
    </a>
  );
}

/* Styles */
const Img = styled.img`
  width: 17px;
  height: 17px;
  margin: 0 10px;
`

export default ImageLink;
