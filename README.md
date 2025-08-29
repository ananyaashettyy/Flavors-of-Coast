#  Ananya Recipes

A simple, full-stack recipe manager with searchable categories, visual veg/non-veg indicators, image uploads, and an admin area for adding and managing recipes.



---

##  Features

-  **25+ Recipe Categories** with 200+ recipes 
- 🟢 **Veg** and 🔴 **Non-Veg** visual indicators
-  **Image uploads** for each recipe
-  **Detailed recipe pages** (ingredients, steps, serving tips)
-  **Search & filter** by category
-  **Admin Panel** for adding & managing recipes
  > (Planned)* Admin authentication (email, username, password)

---

##  Tech Stack

- **Frontend:** Vite + React (TypeScript/JavaScript)
- **Backend:** Node.js, Express
- **Uploads:** Multer (local disk; cloud planned)
- **Styling:** CSS 



---

##  Installation & Setup

### 1️. Clone the repository

```bash

git clone https://github.com/ananyaashettyy/ananya-recipes.git
```
```bash
cd ananya-recipes
```

### 2️. Backend setup

```bash
cd backend
```

```bash
# Initialize if needed
npm init -y
```

```bash
# Install dependencies
npm install express cors body-parser multer dotenv
```


```bash
# Start the server
node server.js
# or if you have nodemon
npx nodemon server.js
```

Backend runs by default at: **http://localhost:5000**  

---

### 3️. Frontend setup

Open a new terminal tab/window:

```bash
cd frontend
```

```bash
# Install dependencies
npm install
```

```bash
# Start the dev server
npm run dev
```

Frontend dev server: **http://localhost:5173**  

 **Access the Application**  

Frontend: **http://localhost:5173**  
Admin Panel: **http://localhost:5173/admin** (Add & manage recipes)
##  Display


<img width="1868" height="840" alt="Screenshot 2025-08-14 144922" src="https://github.com/user-attachments/assets/6ba6dd43-8cab-4ba8-a216-fb5b11d382e8" />








<img width="1868" height="837" alt="Screenshot 2025-08-14 144946" src="https://github.com/user-attachments/assets/208fdc23-fdea-4cdf-b6c4-5dc7e652e47d" />

<img width="1886" height="824" alt="Screenshot 2025-08-14 145028" src="https://github.com/user-attachments/assets/99cf2f56-999a-4966-a44d-57cf250ea157" />








##  License

This project is open source under the **MIT License**.  
You are free to use, modify, and distribute this software with attribution.  

```text
MIT License

Copyright (c) 2025 Ananya R Shetty

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[...rest of MIT License text...]
```
