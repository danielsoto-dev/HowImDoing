import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalProvider from "../contexts/ModalsContext";
import GradesProvider from "../contexts/GradesContext";

import "../styles/App.scss";

function App() {
  return (
    <div className="app">
      <ModalProvider>
        <GradesProvider>
          <Header></Header>
          <Main></Main>
        </GradesProvider>
      </ModalProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
