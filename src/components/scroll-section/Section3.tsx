import React from 'react';
import styled from 'styled-components';
function Section3() {
  return (
    <Section3Container>
      <p>
        <strong>Retina 머그</strong>
        <br />
        아이디어를 광활하게 펼칠
        <br /> 아름답고 부드러운 음료 공간.
      </p>
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
const CanvasCaption = styled.p``;
