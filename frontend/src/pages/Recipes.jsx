import React, { useEffect, useState } from "react";
import categories from "../data/categories";
import "./Recipes.css";
import { useNavigate, useLocation } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q")?.toLowerCase();

  // Fetch recipes from backend
  const fetchRecipes = () => {
    fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error fetching recipes:", err));
  };

  useEffect(() => {
    fetchRecipes();
  }, [location]); // re-fetch when URL changes (e.g. after adding a recipe)

  const matchesSearch = (recipe) => {
    const nameMatch = recipe.name.toLowerCase().includes(searchQuery);
    const categoryMatch = recipe.category.toLowerCase().includes(searchQuery);
    return nameMatch || categoryMatch;
  };

  const filteredRecipes = searchQuery
    ? recipes.filter(matchesSearch).sort((a, b) => a.name.localeCompare(b.name))
    : [];

  const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));

  return (
    <div className="recipes-page">
      <h1 className="page-title">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : "Explore Recipes by Category"}
      </h1>

      {searchQuery ? (
        <div className="category-recipes">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card"
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              >
                {/* Veg/Non-Veg Dot */}
                <span
                  className="veg-dot"
                  style={{
                    backgroundColor:
                      recipe.type?.toLowerCase() === "veg" ? "green" : "red",
                  }}
                ></span>

                <img
                  src={
                    recipe.image.startsWith("/uploads")
                      ? `http://localhost:5000${recipe.image}`
                      : recipe.image
                  }
                  alt={recipe.name}
                  className="recipe-image"
                />
                <h3 className="recipe-title">{recipe.name}</h3>
                <p className="recipe-category">{recipe.category}</p>
              </div>
            ))
          ) : (
            <p>No matching recipes found.</p>
          )}
        </div>
      ) : (
        sortedCategories.map((category) => {
          const categoryRecipes = recipes
            .filter((recipe) => recipe.category === category)
            .sort((a, b) => a.name.localeCompare(b.name));

          if (categoryRecipes.length === 0) return null;

          return (
            <div key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="category-recipes">
                {categoryRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="recipe-card"
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  >
                    {/* Veg/Non-Veg Dot */}
                    <span
                      className="veg-dot"
                      style={{
                        backgroundColor:
                          recipe.type?.toLowerCase() === "veg" ? "green" : "red",
                      }}
                    ></span>

                    <img
                      src={
                        recipe.image.startsWith("/uploads")
                          ? `http://localhost:5000${recipe.image}`
                          : recipe.image
                      }
                      alt={recipe.name}
                      className="recipe-image"
                    />
                    <h3 className="recipe-title">{recipe.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Recipes;
