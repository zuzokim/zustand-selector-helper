import { useLayoutEffect, useRef } from 'react';

export const useRenderCount = () => {
  const countRef = useRef(0);

  useLayoutEffect(() => {
    countRef.current += 1;
  });

  return countRef.current;
};
