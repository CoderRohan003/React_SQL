const express = require('express');
const app = express();
const cors = require('cors');

// Solve JSON related issues
app.use(express.json());

// Middlewares
app.use(cors());

// Access Database
const db = require('./models');

// Routers
const postRoutes = require('./routes/Posts');
app.use('/posts', postRoutes);

const commentsRouter = require('./routes/Comments');
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

// Connect to Database
db.sequelize.sync({ alter: true })
    .then(() => {
        console.log("Database synchronized");
        
        // Start the server only after DB sync is successful
        app.listen(3001, () => {
            console.log('Server is listening on port 3001!');
        });
    })
    .catch(err => {
        console.error("Error synchronizing database:", err);
    });
