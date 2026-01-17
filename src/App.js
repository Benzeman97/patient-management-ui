import React from "react";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
