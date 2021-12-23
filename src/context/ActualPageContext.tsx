import React, { useState, SetStateAction } from "react";
import { IActualPage } from "../interfaces/IActualPage";

interface IActualPageContext {
  actualPage: IActualPage;
  setActualPage: React.Dispatch<SetStateAction<IActualPage>>;
}

export const Context = React.createContext<IActualPageContext>({
  actualPage: "hero",
  setActualPage: () => {},
});

const ActualPageContext: React.FC = ({ children }) => {
  const [actualPage, setActualPage] = useState<IActualPage>("hero");
  return (
    <Context.Provider value={{ actualPage, setActualPage }}>
      {children}
    </Context.Provider>
  );
};

export default ActualPageContext;
