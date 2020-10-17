import React from 'react';
import styled from 'styled-components';
function Footer() {
  return <FooterContainer>2020, 1분코딩</FooterContainer>;
}

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  color: white;
  background-color: #e96907;
`;
