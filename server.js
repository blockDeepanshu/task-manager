const app = require("./app");
const connectDB = require("./services/connectdb");

const http = require("http");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

connectDB();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
