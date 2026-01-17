import React from "react";
import { Route, Routes } from 'react-router-dom';
import CreatePatientPage from "./pages/CreatePatientPage";
import Dashboard from "./pages/Dashboard";
import DemoDashboard from "./pages/DemoDashboard";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/demo" element={<DemoDashboard />} />
        <Route path="/create-patient" element={<CreatePatientPage />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
