const express = require("express");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const socketInit = require("./socket/socket");

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
socketInit(server);

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
// add others: categoryRoutes, questionRoutes, etc.

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
