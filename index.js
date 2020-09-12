/* Go to https://www.youtube.com/watch?v=dQw4w9WgXcQ and follow the instructions and code! */
const server = require("./server")

const port = 4000;


server.listen(port, () => {
  console.log(`\n*Server running on http://localhost:${port}*\n`)
});