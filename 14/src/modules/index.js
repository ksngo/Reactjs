const { combinedReducers, combineReducers} = require('redux')
const { reducer: movies} = require('./movies')

module.exports=combineReducers({
    movies
})