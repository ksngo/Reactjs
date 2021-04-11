
### How the project is run?
1. using express server to serve html file (e.g. app.get('/') and res.sendFile(point_html_file))
2. using webpack to compile jsx in src folder to main.js in public folder
3. html contains scripts to main.js
4. alternatively, if using template engine(e.g. handlebars) as html, refer to 17/express

### to run project
1. npm run build
2. npm run server