require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

const taskRouter = require("./routes/tasks");
app.use("/api/tasks", taskRouter);

app.listen(process.env.PORT, () => console.log(`Server is listening at port ${process.env.PORT}`));
