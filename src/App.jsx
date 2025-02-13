import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Path from "./component/Path";
import Miletones from "./component/Milestones";

const App = () => {
  return (
    <div className="font">
      <Header />
      <div className="container1">
        <Sidebar />
        <div className="container2">
          <Path />
          <Miletones />
        </div>
      </div>
    </div>
  );
};

export default App;
