import React from 'react';
import styled from 'styled-components';
import media from '../../utils/media-query';
function Section0() {
  return (
    <Section0Container>
      <h1>AirMug Pro</h1>
      <DescriptionWrapper>
        <p>
          온전히 빠져들게 하는 <br /> 최고급 세라믹
        </p>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <p>
          주변 맛을 느끼게 해주는 <br /> 주변 맛 허용 모드
        </p>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <p>
          온종일 편안한 <br /> 맞춤형 손잡이
        </p>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <p>
          새롭게 입가를 <br /> 찾아온 매혹
        </p>
      </DescriptionWrapper>
    </Section0Container>
  );
}

export default Section0;

const Section0Container = styled.section`
  padding-top: 50vh;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;

    ${media.tablet`
      font-size: 9vw;
    `}
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  height: 3em;
  font-size: 2.5rem;

  ${media.tablet`
    font-size: 4vw;
  `}

  p {
    line-height: 1.2;
    font-weight: bold;
    text-align: center;
  }
`;
