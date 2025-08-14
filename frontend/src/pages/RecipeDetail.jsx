import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [similarRecipes, setSimilarRecipes] = useState([]);

  // Fetch single recipe and similar recipes
  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id.toString() === id);
        setRecipe(selectedRecipe);

        if (selectedRecipe) {
          const related = data.filter(
            (item) =>
              item.category === selectedRecipe.category &&
              item.id !== selectedRecipe.id
          );
          setSimilarRecipes(related);
        }
      })
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  // Ensure steps is always an array
  const stepsArray = Array.isArray(recipe.steps)
    ? recipe.steps
    : recipe.steps.split("\n");

  return (
    <div className="recipe-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="recipe-header">
        <img
          src={
            recipe.image.startsWith("/uploads")
              ? `http://localhost:5000${recipe.image}`
              : recipe.image
          }
          alt={recipe.name}
          className="recipe-image"
        />
        <div className="recipe-info">
          <h1>{recipe.name}</h1>
          <p className="recipe-category">{recipe.category}</p>
        </div>
      </div>

      <div className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-section">
        <h2>Steps</h2>
        <ol>
          {stepsArray.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="recipe-section">
        <h2>How to Serve</h2>
        <p>{recipe.howToServe}</p>
      </div>

      {similarRecipes.length > 0 && (
        <div className="similar-recipes">
          <h2>Similar Recipes</h2>
          <div className="similar-grid">
            {similarRecipes.map((item) => (
              <div
                key={item.id}
                className="similar-card"
                onClick={() => navigate(`/recipe/${item.id}`)}
              >
                <img
                  src={
                    item.image.startsWith("/uploads")
                      ? `http://localhost:5000${item.image}`
                      : item.image
                  }
                  alt={item.name}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
