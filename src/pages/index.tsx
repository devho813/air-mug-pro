import React from 'react';
import styled from 'styled-components';
import Gnb from '../components/Gnb';
import Lnb from '../components/Lnb';
import ScrollSection from '../components/scroll-section';

export default function Home() {
  return (
    <HomeContainer>
      <Gnb />
      <Lnb />
      <ScrollSection />
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;
