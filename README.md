# Flavors of Coast

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



<img width="1892" height="814" alt="Screenshot 2025-08-29 195049" src="https://github.com/user-attachments/assets/6ebd90ec-d108-44be-8ca0-b59742ce90ba" />

<img width="1857" height="849" alt="Screenshot 2025-08-29 195142" src="https://github.com/user-attachments/assets/2e642702-2d16-451f-bd7c-b7074d4b8633" />
<img width="1888" height="848" alt="Screenshot 2025-08-29 195105" src="https://github.com/user-attachments/assets/2e3257e9-12e5-41a6-ac61-ed56459e77fa" />

<img width="1860" height="935" alt="Screenshot 2025-08-29 201234" src="https://github.com/user-attachments/assets/6683446d-740e-42ff-85c0-9a83775d7477" />
<img width="1650" height="777" alt="Screenshot 2025-08-29 195227" src="https://github.com/user-attachments/assets/f8901b7f-4f23-454d-81d9-66e3baa1394f" />
<img width="1890" height="834" alt="Screenshot 2025-08-29 195218" src="https://github.com/user-attachments/assets/ddf2eca1-56be-42cb-8837-f1222f142e4f" />


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
