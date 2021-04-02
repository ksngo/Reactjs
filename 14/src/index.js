const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const reducers = require('./modules')
const routes = require('./routes.js')

//**(1) Provider is from react component that caters for redux store */
//**(2) place a store property in Provider component and use createStore function from redux */
//**(3) argument in createStore() are the combineReducers({movies}) where combineReducers function from redux*/
//**(4) combineReducers({movies}) contains the object(which is the store) created in modules/movies.js */
module.exports = render((
    <Provider store={createStore(reducers)}> 
    {routes} 
    </Provider>
), document.getElementById('app'))


