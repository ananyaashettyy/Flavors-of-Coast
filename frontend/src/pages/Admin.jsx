import React, { useState, useEffect } from "react";
import "./Admin.css";

const Admin = ({ onRecipeAdded }) => { // ✅ Accept callback prop
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    ingredients: "",
    steps: "",
    howToServe: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState([]);

  // Fetch categories from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((r) => r.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("category", formData.category.trim());
    data.append("ingredients", formData.ingredients);
    data.append("steps", formData.steps);
    data.append("howToServe", formData.howToServe);
    data.append("image", imageFile);

    try {
      const res = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to add recipe.");

      const result = await res.json();

      alert("Recipe added successfully!");
      setFormData({
        name: "",
        category: "",
        ingredients: "",
        steps: "",
        howToServe: "",
      });
      setImageFile(null);

      // ✅ Call parent to refresh list
      if (onRecipeAdded) {
        onRecipeAdded(result.recipe);
      }

    } catch (err) {
      console.error(err);
      alert("Failed to add recipe.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <label>Recipe Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} required />

        <label>Category</label>
        <input
          list="category-list"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Select or type new category"
          required
        />
        <datalist id="category-list">
          {categories.map((cat, idx) => (
            <option key={idx} value={cat} />
          ))}
        </datalist>

        <label>Ingredients (one per line)</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />

        <label>Steps (one per line)</label>
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          required
        />

        <label>How to Serve</label>
        <textarea
          name="howToServe"
          value={formData.howToServe}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default Admin;
