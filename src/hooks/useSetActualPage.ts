import { useEffect, MutableRefObject, SetStateAction } from "react";

export const useSetActualPage = (
  elementRef: MutableRefObject<HTMLDivElement | null>,
  actualPageId: "hero" | "products" | "about" | "contact",
  setActualPage: React.Dispatch<
    SetStateAction<"hero" | "products" | "about" | "contact">
  >
) => {
  useEffect(() => {
    const { current } = elementRef;

    const options = {
      treshold: 0,
      rootMargin: "-30%  0px",
    };

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
      console.log(entries[0]);
      if (entries[0].isIntersecting) {
        setActualPage(actualPageId);
      } else {
      }
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [elementRef, actualPageId, setActualPage]);
};
