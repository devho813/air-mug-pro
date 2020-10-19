import React, { memo } from 'react';
import styled from 'styled-components';

function Gnb() {
  return (
    <GnbContainer>
      <GnbLinkWrapper>
        <GnbLink href="#">Rooms</GnbLink>
        <GnbLink href="#">Ideas</GnbLink>
        <GnbLink href="#">Stores</GnbLink>
        <GnbLink href="#">Contact</GnbLink>
      </GnbLinkWrapper>
    </GnbContainer>
  );
}

export default memo(Gnb);

const GnbContainer = styled.nav`
  padding: 0 1rem;
  height: 44px;
`;

const GnbLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`;

const GnbLink = styled.a`
  color: rgb(29, 29, 31);
`;
