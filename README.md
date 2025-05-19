## 🚀 Project Overview

This is a full-stack blog application that allows users to **register, log in, create blog posts, and comment** on posts. The application features a clean and responsive UI, user authentication, and real-time feedback using toast notifications. It is built with a **React frontend** and a **Node.js + Express backend**, with **MySQL** as the relational database.

All blog posts and comments are **associated with registered users**, and the backend leverages **Sequelize ORM** for defining and managing model relationships (e.g., Users ↔ Posts, Posts ↔ Comments).

---

## 🛠 Tech Stack

### Frontend:

* **React.js** – Component-based UI library
* **React Router DOM** – Client-side routing
* **Axios** – HTTP requests to the backend
* **Formik + Yup** – Form handling and validation
* **React Toastify** – User-friendly toast notifications

### Backend:

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework for APIs
* **Sequelize ORM** – SQL-based ORM for MySQL
* **MySQL** – Relational database
* **CORS, dotenv** – Middleware and environment configuration

### Dev Tools:

* **Concurrently** – Run frontend and backend with a single command
* **Nodemon** – Auto-restarts the backend on changes

---

## 📦 Running the Project

Make sure you have Node.js and MySQL installed on your system.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
cd ..
```

### 3. Configure environment

Make sure your MySQL credentials are configured properly in `backend/config/config.json`.

If needed, create a `.env` file for storing sensitive data.

### 4. Start both servers

From the **root of the project**, run:

```bash
npm start
```

This command uses `concurrently` to start both:

* Frontend (React) on `http://localhost:3000`
* Backend (Express) on `http://localhost:3006`

---

## 🧠 Additional Notes

* The database will sync automatically on start (`sequelize.sync({ alter: true })`), creating the necessary tables and relationships.
* You can access the MySQL database using tools like **MySQL Workbench** to verify data.

---

Let me know if you’d like to include example API routes, screenshots, or a deployment guide too!
