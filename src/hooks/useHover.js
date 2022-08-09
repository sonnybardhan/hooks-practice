import { useCallback, useEffect, useRef, useState } from 'react';

function useHover() {
  const [hovered, setHovered] = useState(false);
  const hoverRef = useRef(null);

  const onHoverIn = useCallback(() => {
    setHovered(true);
  }, []);

  const onHoverOut = useCallback(() => {
    setHovered(false);
  }, []);

  useEffect(() => {
    if (!hoverRef.current) return;

    hoverRef.current.addEventListener('mouseenter', onHoverIn);
    hoverRef.current.addEventListener('mouseleave', onHoverOut);

    return () => {
      hoverRef.current.removeEventListener('mouseenter', onHoverIn);
      hoverRef.current.removeEventListener('mouseleave', onHoverOut);
    };
  }, [hoverRef.current]);

  return [hoverRef, hovered];
}

export default useHover;
