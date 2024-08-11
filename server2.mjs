import { log } from "console";
import { createServer } from "http";
const PORT = process.env.PORT;
const users = [
  {
    id: 1,
    name: "Ammar",
    age: "20",
  },
  {
    id: 2,
    name: "Burhan",
    age: "19",
  },
  {
    id: 3,
    name: "Taha",
    age: "30",
  },
];
const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  } 
  //Getting users with its id
  else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    
    console.log(id);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Ayeza" }));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Not Found");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
