# to run index.html
npm run build4 (build js files from jsx files when there are changes to jsx files)  

npm i node-static -g (install static if necessary)  

cd 4
static (must be named as index.html)  

# to run index6.html (stateless components example )

```javascript
// do without
class HelloWorld extends React.Component{
    render(){
        return <h1></h1>
    }
}
//instead use
const HelloWorld = function(props){
    return <h1></h1>
}
```

npm run build4 (focus here is the dota.jsx and dota_script.jsx)  
change filename index6.html to index.html  
static  
