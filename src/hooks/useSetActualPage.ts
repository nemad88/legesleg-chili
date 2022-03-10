import { useEffect, MutableRefObject, useContext } from "react";
import { Context as ActualPageContext } from "../context/ActualPageContext";

export const useSetActualPage = (
  elementRef: MutableRefObject<HTMLDivElement | null>,
  actualPageId: "hero" | "products" | "about" | "contact"
) => {
  const { setActualPage } = useContext(ActualPageContext);

  useEffect(() => {
    const { current } = elementRef;

    const options = {
      treshold: 0,
      rootMargin: "-30%  0px",
    };

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
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
