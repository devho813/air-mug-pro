import React, { memo } from 'react';
import styled from 'styled-components';

function Lnb() {
  return (
    <LnbContainer>
      <LnbLinkWrapper>
        <LnbLink href="#" className="product-name">
          AirMug Pro
        </LnbLink>
        <LnbLink href="#">개요</LnbLink>
        <LnbLink href="#">제품사양</LnbLink>
        <LnbLink href="#">구입하기</LnbLink>
      </LnbLinkWrapper>
    </LnbContainer>
  );
}

export default memo(Lnb);

const LnbContainer = styled.nav`
  padding: 0 1rem;
  height: 52px;
  border-bottom: 1px solid #ddd;
`;
const LnbLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`;
const LnbLink = styled.a`
  color: rgb(29, 29, 31);

  &.product-name {
    margin-right: auto;
    font-size: 1.4rem;
    font-weight: bold;
  }

  &:not(.product-name) {
    margin-left: 2em;
    font-size: 0.8rem;
  }
`;
