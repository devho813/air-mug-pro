import React from 'react';
import styled from 'styled-components';
import Gnb from '../components/Gnb';
import Lnb from '../components/Lnb';

export default function Home() {
  return (
    <HomeContainer>
      <Gnb />
      <Lnb />
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;
