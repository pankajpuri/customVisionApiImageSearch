import React, { Component } from "react";
import Header from "./header";
import LandingSection from "./landingpage";
import SearchImage from "./searchimage";
class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <Header />
        <LandingSection />
        <SearchImage />
      </main>
    );
  }
}

export default Home;
