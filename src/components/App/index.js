import React from 'react';
import Header from "../Header";
import Feed from "../Feed";
import FilterBar from "../FilterBar";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <FilterBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
