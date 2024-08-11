import { createServer } from "http";
const PORT = process.env.PORT;
//User object
const users = [
  { id: 1, name: "Maham" },
  { id: 2, name: "Wara" },
  { id: 3, name: "Jatoi" },
];

/// Create a server
const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(users));
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/").pop();
    const user = users.find((users) => users.id === parseInt(id));
    if (user) {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(user));
    } else {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.end(JSON.stringify({ message: "User not found" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Page Not Found");
  }
});

//server listening on PORT
server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
