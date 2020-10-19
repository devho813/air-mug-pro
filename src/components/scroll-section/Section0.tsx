import React, { memo } from 'react';
import styled from 'styled-components';
import media from '../../utils/media-query';

interface Props {
  showScene: boolean;
}
function Section0({ showScene }: Props) {
  return (
    <Section0Container showScene={showScene}>
      <h1>AirMug Pro</h1>
      <div>
        <p>
          온전히 빠져들게 하는 <br /> 최고급 세라믹
        </p>
      </div>
      <div>
        <p>
          주변 맛을 느끼게 해주는 <br /> 주변 맛 허용 모드
        </p>
      </div>
      <div>
        <p>
          온종일 편안한 <br /> 맞춤형 손잡이
        </p>
      </div>
      <div>
        <p>
          새롭게 입가를 <br /> 찾아온 매혹
        </p>
      </div>
    </Section0Container>
  );
}

export default memo(Section0);

const Section0Container = styled.section<{ showScene: boolean }>`
  padding-top: 50vh;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;

    ${media.tablet`
      font-size: 9vw;
    `}
  }

  div {
    display: ${({ showScene }) => (showScene ? 'block' : 'none')};
    margin: 5px 0;
    height: 3em;
    font-size: 2.5rem;

    /* sticky */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    ${media.tablet`
    font-size: 4vw;
  `}

    p {
      line-height: 1.2;
      font-weight: bold;
      text-align: center;
    }
  }
`;
