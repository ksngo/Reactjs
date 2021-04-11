To run the project (you need MongoDB as well- `$ mongod`):

```
$ npm install -g gulp
$ npm install
$ gulp
```

Open at <localhost:3000>

* Dependencies (node_modules) are included.

### How they pieces together

1. webpack starts from client/app.jsx
2. app.jsx has modules from the components and eventually webpack builds the bundle. Babel-loader is also in the config of webpack to ensure JSX to JS is taken care.
3. node-dev . will start index.js starting express server at port 3000.
4. when localhost:3000 starts, the express handles '/' and able render template engine index.hbs which contains the various react elements strings and a minor javascript via res.render(an express feature). Hence, the first page is loaded via the server providing the tempalte engine html file. (Refer to 17/express if keen to understand more about ReactDOMServer.renderToString(reactElement) and React.createFactory(reactComponent.jsx) roles in creating html strings with React Markup)
5. Now the the html file contains the script(src="/js/bundle.js", originally in the hbs template) that loads the webpack bundle.The script points to the public folder that make available via app.use(express.static('public')).
6. Step 4 is to statically load the first page of the html via the server first by using ReactDOMServer.renderToString.
7. Step 5 is to load consquently the rest of the views via the client engine via the webpack bundle in  script(src="/js/bundle.js")

### Steps to start my machine:
1. sudo systemctl start mongod 
2. npm install
3. npm run start