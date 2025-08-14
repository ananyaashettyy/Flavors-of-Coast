// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Admin from './pages/Admin';
import './App.css';

const App = () => (
  <div className="app-container">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
