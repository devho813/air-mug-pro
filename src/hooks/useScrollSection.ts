import { useState } from 'react';
import { selector, useRecoilValue } from 'recoil';

const initialSectionInfos = [
  {
    id: 0,
    type: 'sticky',
    heightMultiple: 5,
    scrollHeight: 0,
  },
  {
    id: 1,
    type: 'normal',
    heightMultiple: 5,
    scrollHeight: 0,
  },
  {
    id: 2,
    type: 'sticky',
    heightMultiple: 5,
    scrollHeight: 0,
  },
  {
    id: 3,
    type: 'sticky',
    heightMultiple: 5,
    scrollHeight: 0,
  },
];

const sectionInfoState = selector({
  key: 'sectionInfoState',
  get: () => {
    if (typeof window === 'undefined') {
      // SSR
      return initialSectionInfos;
    }

    const sectionInfos = initialSectionInfos.map((sectionInfo) => {
      return {
        ...sectionInfo,
        scrollHeight: sectionInfo.heightMultiple * window.innerHeight,
      };
    });

    return sectionInfos;
  },
});

function useScrollSection() {
  const [showScene] = useState(0);
  const sectionInfos = useRecoilValue(sectionInfoState);

  return { showScene, sectionInfos };
}

export default useScrollSection;
