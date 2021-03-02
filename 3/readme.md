npm i babel-cli babel-preset-react --save-dev  
- install Babel CLI and React preset 

- this goes to package.json (Define babel presets in package.json or .babelrc)  
```javascript
 "babel": {
        "presets": [
            "react"
        ]
    }
```  
- run this to convert jsx to js  
./node_modules/.bin/babel 3/sample.jsx -o 3/js/sample.js  

Alternatively,  
- store command in package.json file with e.g. npm run build  