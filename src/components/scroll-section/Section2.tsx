import React from 'react';
import styled from 'styled-components';
function Section2() {
  return (
    <Section2Container>
      <Content>
        <p>
          <small>편한찬 촉감</small>
          입과 하나 되다
        </p>
      </Content>
      <Content>
        <p>
          편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를 하나하나 새롭게 살피고 재구성하는 과정을 거쳐
          새로운 수준의 머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고 오롯이 당신과 음료만
          남게 되죠.
        </p>
        <Pin />
      </Content>
      <Content>
        <p>
          디자인 앤 퀄리티 오브 스웨덴,
          <br />
          메이드 인 차이나
        </p>
        <Pin />
      </Content>
    </Section2Container>
  );
}
export default Section2;

const Section2Container = styled.section`
  padding-top: 50vh;
`;
const Content = styled.div``;
const Pin = styled.div``;
