import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Join from "./component/Join/join";




function App() {

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        {/* <Route path="/" component={Join}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
