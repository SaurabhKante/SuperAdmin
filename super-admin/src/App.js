import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import AboutToExpire from './Components/AboutToExpire';
import DuesTable from './Components/DuesTable';
import MainForm from './Components/MainForm';
import AdminLogin from "./Components/AdminLogin";
import DashBoard from "./Components/DashBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route element={<MainForm />} path="/schoolOnBoarding" />
          <Route element={<DuesTable />} path="/duestable"  />
          <Route element={<AboutToExpire />} path="/aboutexpire"  />
          <Route element={<AdminLogin />} path="/"  />
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
