import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  // Fetch recipes when search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setRecipes([]);
      return;
    }

    fetch(`http://localhost:5000/api/recipes?search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/recipes?search=${searchTerm}`);
    setSearchTerm(""); // clears input
    setRecipes([]);    // hides dropdown
  };

  const handleResultClick = () => {
    setSearchTerm(""); // clears input
    setRecipes([]);    // hides dropdown
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Cooking With Ananya</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      {recipes.length > 0 && (
        <div className="search-results">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="search-result-item"
              onClick={handleResultClick} // close dropdown when clicked
            >
              {recipe.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
