// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importez vos composants de page
import CreateUser from './pages/creatUser/createUser';
import Login from './pages/login/login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route pour la page de création d'utilisateur */}
          <Route path="/" element={<CreateUser />} />
          
          {/* Route pour la page de login */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;