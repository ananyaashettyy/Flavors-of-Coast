const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded images
const uploadDir = path.join(__dirname, "public/uploads");
app.use("/uploads", express.static(uploadDir));

// Ensure uploads folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Recipes JSON path
const recipesPath = path.join(__dirname, "recipes.json");

// Load recipes into memory
let recipes = [];
try {
  recipes = JSON.parse(fs.readFileSync(recipesPath, "utf-8"));
} catch (err) {
  console.error("Error reading recipes.json:", err);
}

// ------------------- API ROUTES -------------------

// GET all recipes
app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

// POST new recipe with image
app.post("/api/recipes", upload.single("image"), async (req, res) => {
  try {
    const { name, category, ingredients, steps, howToServe } = req.body;

    const newRecipe = {
      id: recipes.length + 1,
      name,
      image: `/uploads/${req.file.filename}`,
      category,
      ingredients: ingredients.split("\n").map((i) => i.trim()),
      steps: steps.split("\n").map((s) => s.trim()),
      howToServe,
    };

    recipes.push(newRecipe);
    await fsPromises.writeFile(recipesPath, JSON.stringify(recipes, null, 2));

    res.json({ message: "Recipe added", recipe: newRecipe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add recipe" });
  }
});

// ------------------- SERVE REACT FRONTEND -------------------

// Serve React build
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// ------------------- START SERVER -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
