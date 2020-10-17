import React from 'react';
import styled from 'styled-components';
import media from '../../utils/media-query';
function Section3() {
  return (
    <Section3Container>
      <MainDescription>
        <strong>Retina 머그</strong>
        <br />
        아이디어를 광활하게 펼칠
        <br /> 아름답고 부드러운 음료 공간.
      </MainDescription>
      <CanvasCaption>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at fuga quae perspiciatis veniam impedit et,
        ratione est optio porro. Incidunt aperiam nemo voluptas odit quisquam harum in mollitia. Incidunt minima iusto
        in corporis, dolores velit. Autem, sit dolorum inventore a rerum distinctio vero illo magni possimus temporibus
        dolores neque adipisci, repudiandae repellat. Ducimus accusamus similique quas earum laborum. Autem tempora
        repellendus asperiores illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente rerum neque error
        deleniti quis, et, quibusdam, est autem voluptate rem voluptas. Ratione soluta similique harum nihil vel. Quas
        inventore perferendis iusto explicabo animi eos ratione obcaecati.
      </CanvasCaption>
    </Section3Container>
  );
}
export default Section3;

const Section3Container = styled.section`
  padding-top: 50vh;
`;

const MainDescription = styled.p`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1000px;
  font-size: 2rem;
  color: #888;

  ${media.tablet`
    font-size: 4vw;
  `}

  strong {
    color: rgb(29, 29, 31);
    font-weight: bold;
  }
`;

const CanvasCaption = styled.p`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1000px;
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #888;

  ${media.tablet`
    font-size: 2rem;
  `}
`;
