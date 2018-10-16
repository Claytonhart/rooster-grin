import React, { Component } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PageDesc from "./components/PageDesc";
import PersonalizeEverything from "./components/PersonalizeEverything";
import CuttingEdge from "./components/CuttingEdge";
import CheckerBoard from "./components/CheckerBoard";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <PageDesc />
        <PersonalizeEverything />
        <CuttingEdge />
        <CheckerBoard side="right" img={img1} />
        <CheckerBoard side="left" img={img2} />
      </div>
    );
  }
}

export default App;
