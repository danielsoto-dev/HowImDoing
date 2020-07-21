import React, { useState, useContext } from "react";
import { createContext } from "react";
export const ResultsContext = createContext(null);
export const ConfigContext = createContext(null);

export function useResults() {
  return useContext(ResultsContext);
}

export function useConfig() {
  return useContext(ConfigContext);
}

export default function ModalProvider({ children }) {
  const [config, setConfig] = useState({
    desiredGrade: 3,
    maxGrade: 5,
  });
  const [results, setResults] = useState({});

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      <ResultsContext.Provider value={{ results, setResults }}>
        {children}
      </ResultsContext.Provider>
    </ConfigContext.Provider>
  );
}
