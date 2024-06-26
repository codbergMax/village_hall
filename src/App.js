import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Intro from "./intro";
import Select from "./select";
import VillageHall from "./villageHall";
import Word from "./villageHall/word";
import Sentence from "./villageHall/sentence";
import Clue1 from "./villageHall/word/clue1";
import Clue2 from "./villageHall/word/clue2";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" element={<Intro />} />
        {/* <Route path="/vilage_hall" element={<Intro />} /> */}
        <Route path="/select" element={<Select />} />
        <Route path="/villageHall" element={<VillageHall />} />
        <Route path="/villageHall/word" element={<Word />} />
        <Route path="/villageHall/sentence" element={<Sentence />} />
        <Route path="/villageHall/word/clue1" element={<Clue1 />} />
        <Route path="/villageHall/word/clue2" element={<Clue2 />} />
      </Switch>
    </Router>
  );
}

export default App;
