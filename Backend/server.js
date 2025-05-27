const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 3000; // Provide a fallback port if needed

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
