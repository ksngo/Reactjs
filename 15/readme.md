(1) webpack bundle are saved to build. Build's Public folder is make accessible in express server by serving through
express.static at express server API route of '/dist'

(2) The server files are also compiled into build folder separately. Run nodemon on build/server.js to start express server running that provides API for '/dist' , graphql and '*'. The '*' will provide index.html. Hence, once server is running on port 3000. Go to localhost:3000 , by res.sendFile by express method, index.html is sent to browser.

(3) In index.html, script points to the webpack bundle at dist/index.js. The express server handling '/dist' will point to public folder and all the javascripts will be loaded to browser.