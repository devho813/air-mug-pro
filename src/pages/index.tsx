import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Gnb from '../components/Gnb';
import Lnb from '../components/Lnb';
import ScrollSection from '../components/scroll-section';

export default function Home() {
  return (
    <HomeContainer>
      <Gnb />
      <Lnb />
      <ScrollSection />
      <Footer />
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;
