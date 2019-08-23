import React from 'react';
import styled from 'styled-components';

type Props = {
  className: string;
  href: string;
  iconURL: string;
}

const ImageLink: React.FC<Props> = (props) => {
  return(
    <Link
      className={props.className}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img src={props.iconURL} />
    </Link>
  );
}

/* Styles */
const Img = styled.img`
  width: 17px;
  height: 17px;
`

const Link = styled.a`
  margin: 0 20px 0 0;
`

export default ImageLink;
