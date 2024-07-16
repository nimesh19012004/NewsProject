import React, { useState } from "react";
import NavBar from "./component/NavBar";
import NewsBoard from "./component/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");

  return (
    <div>
      <NavBar setCategory={setCategory} setCountry={setCountry} country/>
      <NewsBoard category={category} country={country}></NewsBoard>
    </div>
  );
};

export default App;
