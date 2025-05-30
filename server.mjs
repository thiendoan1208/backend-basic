import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 4000; // 0 => ~ 65000

// Tạo 1 HTTP server và listen trên port 3000 for request
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});

// Website sẽ chạy ở đâu, sau khi server chạy, hàm callback sẽ được chạy

server.listen(port, hostname, () => {
  console.log(`server running at: https://${hostname}:${port}/`);
});

// Tự động chạy trên localhost
server.listen(port, () => {
  console.log(`server running at: https://${hostname}:${port}/`);
});
