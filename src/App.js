import React, { Component } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PageDesc from "./components/PageDesc";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <PageDesc />
      </div>
    );
  }
}

export default App;
