To run the project (you need MongoDB as well- `$ mongod`):

```
$ npm install -g gulp
$ npm install
$ gulp
```

Open at <localhost:3000>

* Dependencies (node_modules) are included.

Overview:

(1) webpack starts from client/app.jsx
(2) app.jsx has modules from the components and eventually webpack builds the bundle. Babel-loader is also in the config of webpack to ensure JSX to JS is taken care.
(3) node-dev . will start index.js starting express server at port 3000.
(4) when localhost:3000 starts, the express handles '/' and able render template engine index.hbs which contains the various react elements strings and a minor javascript via res.render(an express feature). Hence, the first page is loaded via the server providing the tempalte engine html file. (Refer to 17/express if keen to understand more about ReactDOMServer.renderToString(reactElement) and React.createFactory(reactComponent.jsx) roles in creating html strings with React Markup)
(5) Now the the html file contains the script that loads the webpack bundle.The script points to the public folder that make available via app.use(express.static('public')).

Start:
(1) sudo systemctl start mongod 
(2) npm install
(3) npm run start