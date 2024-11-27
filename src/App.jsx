import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import RefrigeratorPromotion from './components/RefrigeratorPromotion';
import RefrigeratorOptions from "./components/RefrigeratorOptions";
import RefrigeratorForm from "./components/RefrigeratorForm";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RefrigeratorPromotion />} />
        <Route path="/refrigerator-form" element={<RefrigeratorForm />} />
        <Route path="/refrigerator-Options" element={<RefrigeratorOptions />} />
        <Route path="/form" element={<FormComponent />} />


      </Routes>
    </Router>
  );
}

export default App;
