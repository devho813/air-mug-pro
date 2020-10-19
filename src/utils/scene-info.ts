export const initialSceneInfos = [
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

export function getSceneInfos() {
  if (typeof window === 'undefined') {
    return;
  }

  const sceneInfos = initialSceneInfos.map((sceneInfo) => {
    return {
      ...sceneInfo,
      scrollHeight: sceneInfo.heightMultiple * window.innerHeight,
    };
  });

  return sceneInfos;
}
