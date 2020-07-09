import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/App.css";
function App() {
  return (
    <div className="app">
      <Header className="App-header"></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
