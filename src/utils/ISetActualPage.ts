import { SetStateAction } from "react";

export interface ISetActualPage {
  setActualPage: React.Dispatch<
    SetStateAction<"hero" | "products" | "about" | "contact">
  >;
}

export interface IActualPage {
  actualPage: "hero" | "products" | "about" | "contact";
}
