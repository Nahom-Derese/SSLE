import { createContext, useState } from "react";

export const ResultContext = createContext();

export function ResultProvider(props) {
  const [Data, setData] = useState([]);

  return (
    <ResultContext.Provider value={[Data, setData]}>
      {props.children}
    </ResultContext.Provider>
  );
}
