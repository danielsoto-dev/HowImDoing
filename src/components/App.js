import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { ResultsContext } from "../contexts/ResultsContext";
import "../styles/App.scss";

function App() {
  const [results, setResults] = useState({});
  return (
    <div className="app">
      <Header></Header>
      <ResultsContext.Provider value={{ results, setResults }}>
        <Main></Main>
      </ResultsContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
