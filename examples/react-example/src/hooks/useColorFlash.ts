import { useEffect, useRef, useState } from 'react';

export const useColorFlash = (renderCount: number) => {
  const [color, setColor] = useState('transparent');
  const prevRenderCount = useRef(renderCount);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // On first render, just store the initial render count
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevRenderCount.current = renderCount;
      return;
    }

    if (renderCount > prevRenderCount.current) {
      setColor('var(--intensive-bg-color)');

      const timer = setTimeout(() => {
        setColor('transparent');
      }, 1000);

      prevRenderCount.current = renderCount;
      return () => clearTimeout(timer);
    }
  }, [renderCount]);

  return color;
};
