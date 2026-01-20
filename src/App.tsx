import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientsList from "./components/PatientsList";
import PatientDetails from "./components/PatientDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientsList />} />
        <Route path="/Patient/:id" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
