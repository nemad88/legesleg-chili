import { useRef, useCallback, useEffect } from "react";

const useOnClickOutside = (onClose: () => void) => {
  const ref = useRef(null);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        onClose?.();
      }
    },
    [ref.current]
  );

  useEffect(() => {
    document.addEventListener("click", clickListener);

    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  return ref;
};

export default useOnClickOutside;
