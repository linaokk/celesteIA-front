// src/App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

// Importez vos composants de page
import CreateUser from './pages/creatUser/createUser';
import Login from './pages/login/login';
import Dashboard from './pages/dashboards/client-dashboard/client-dashboard';
import LoadingPage from './components/loading-page/loading-page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route pour la page de création d'utilisateur */}
          <Route path="/" element={<CreateUser />} />

          {/* Route pour la page de login */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />


          <Route path="/loader" element={<LoadingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;