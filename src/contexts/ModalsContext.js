import React, { useState, useContext } from "react";
import { createContext } from "react";
export const ModalResultContext = createContext(null);
export const ModalConfigContext = createContext(null);

export function useResultsModal() {
  return useContext(ModalResultContext);
}

export function useConfigModal() {
  return useContext(ModalConfigContext);
}

export default function ModalProvider({ children }) {
  const [openConfigModal, setConfigModal] = useState(false);
  const [openResultModal, setResultModal] = useState(false);

  return (
    <ModalConfigContext.Provider value={{ openConfigModal, setConfigModal }}>
      <ModalResultContext.Provider value={{ openResultModal, setResultModal }}>
        {children}
      </ModalResultContext.Provider>
    </ModalConfigContext.Provider>
  );
}
