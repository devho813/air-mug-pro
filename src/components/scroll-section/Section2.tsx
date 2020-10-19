import React, { memo } from 'react';
import styled from 'styled-components';
import media from '../../utils/media-query';
interface Props {
  showScene: boolean;
}
function Section2({ showScene }: Props) {
  return (
    <Section2Container>
      <MainDescription showScene={showScene}>
        <p>
          <small>편안한 촉감</small>
          입과 하나 되다
        </p>
      </MainDescription>
      <SubDescription showScene={showScene}>
        <p>
          편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를 하나하나 새롭게 살피고 재구성하는 과정을 거쳐
          새로운 수준의 머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고 오롯이 당신과 음료만
          남게 되죠.
        </p>
        <Pin />
      </SubDescription>
      <SubDescription showScene={showScene}>
        <p>
          디자인 앤 퀄리티 오브 스웨덴,
          <br />
          메이드 인 차이나
        </p>
        <Pin />
      </SubDescription>
    </Section2Container>
  );
}

export default memo(Section2);

const Section2Container = styled.section`
  padding-top: 50vh;
`;

const MainDescription = styled.div<{ showScene: boolean }>`
  display: ${({ showScene }) => (showScene ? 'block' : 'none')};
  margin: 5px 0;
  height: 3em;
  font-size: 2.5rem;

  /* sticky */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  p {
    font-size: 3.5rem;
    text-align: center;
    font-weight: bold;

    ${media.tablet`
      font-size: 6vw;
    `}

    small {
      display: block;
      margin-bottom: 0.5em;
      font-size: 1.2rem;

      ${media.tablet`
        font-size: 1.5vw;
      `}
    }
  }
`;

const SubDescription = styled.div<{ showScene: boolean }>`
  display: ${({ showScene }) => (showScene ? 'block' : 'none')};
  width: 50%;
  font-weight: bold;

  /* sticky */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  ${media.tablet`
    width: 20%;
  `}
`;

const Pin = styled.div`
  width: 1px;
  height: 100px;
  background-color: rgb(29, 29, 31);
`;
