const http = require("http");
const movies = require("./movies.json");
const PORT = 3001;


const server = http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.writeHead(200, {"Content-type": "application/json"});
  const responseData = {
    status: "success",
    data: movies, 
  }
  res.end(JSON.stringify(responseData));
});

if (process.env.NODE_ENV === 'development') {
  console.log('Running in development mode');
} else {
  console.log('Running in production mode');
}


server.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
