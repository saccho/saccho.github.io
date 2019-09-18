import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  const date = new Date()
  return(
    <Copyright>(c) {date.getFullYear()} Satoru Yasukawa.</Copyright>
  );
}

/* Styles */
const Copyright = styled.div`
  position: relative;
  font-size: 12px;
  padding: 5px 10px;
  text-align: center;
`

export default Footer;
