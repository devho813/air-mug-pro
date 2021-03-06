import React, { memo } from 'react';
import styled from 'styled-components';
import media from '../../utils/media-query';
function Section1() {
  return (
    <Section1Container>
      <p>
        <strong>보통 스크롤 영역</strong>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem suscipit voluptatum veritatis itaque iure
        sapiente nulla dicta qui corporis quaerat vitae ducimus, beatae fuga est cupiditate quidem error nostrum minus
        libero quod impedit laudantium! Tempora delectus rerum ullam provident ea, facilis sapiente excepturi iste,
        explicabo neque quam deserunt commodi illum repellendus exercitationem aliquid dolorum molestias accusantium
        aliquam cum praesentium assumenda obcaecati. Fugiat optio rem, maiores quibusdam autem incidunt aliquid placeat
        quae accusantium veritatis ab repudiandae voluptatibus eius nihil quia fugit laudantium. Fuga alias voluptate,
        laborum nobis ex ut rem provident excepturi saepe repudiandae cumque corporis sequi laudantium voluptatem animi,
        officiis qui. Molestiae inventore a in tempore dignissimos quam cumque, possimus consectetur corporis facere
        ducimus ipsa, quisquam necessitatibus cum sequi. Optio, ad vitae non reprehenderit modi repudiandae possimus
        ipsum sint dicta expedita eveniet soluta quod! Qui vitae ea reprehenderit ducimus iste ipsum autem, alias quae
        facilis, rerum, quas nobis et. Dignissimos eum animi similique alias, eaque blanditiis molestias dolor quos
        porro quam dicta temporibus! Exercitationem praesentium quo voluptate dignissimos magnam! Nostrum aut incidunt
        quidem dolores delectus repudiandae consectetur mollitia, quia obcaecati distinctio voluptates blanditiis
        possimus magnam ratione odio corrupti excepturi a sint sapiente odit ad temporibus voluptatibus unde? Ullam, hic
        ratione!
      </p>
    </Section1Container>
  );
}

export default memo(Section1);

const Section1Container = styled.section`
  padding-top: 50vh;

  p {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1000px;
    font-size: 1.2rem;
    color: #888;

    ${media.tablet`
      font-size: 2rem;
    `}

    strong {
      float: left;
      margin-right: 0.2em;
      font-size: 3rem;
      color: rgb(29, 29, 31);
      font-weight: bold;

      ${media.tablet`
        font-size: 6rem;
    `}
    }
  }
`;
