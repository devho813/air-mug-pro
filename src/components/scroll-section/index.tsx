import React, { memo, useState } from 'react';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function ScrollSection() {
  const [showScene, setShowScene] = useState(0);

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
