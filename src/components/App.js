import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/App.scss";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
