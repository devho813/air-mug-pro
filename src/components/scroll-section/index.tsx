import React, { memo } from 'react';
import useScrollSection from '../../hooks/useScrollSection';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function ScrollSection() {
  const { showScene, sectionInfos } = useScrollSection();

  return (
    <>
      <Section0 showScene={showScene === 0} />
      <Section1 />
      <Section2 showScene={showScene === 2} />
      <Section3 />
    </>
  );
}

export default memo(ScrollSection);
