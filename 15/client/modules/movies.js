const { handleActions } = require('redux-actions')

const FETCH_MOVIES = 'movies/FETCH_MOVIES'
const FETCH_MOVIE = 'movies/FETCH_MOVIE'

module.exports = {
    fetchMoviesActionCreator: (response) => ({
        type: FETCH_MOVIES,
        movies: response.data.data.movies
    }),
    fetchMovieActionCreator: (response) => ({
        type: FETCH_MOVIE,
        movie: response.data.data.movie
    }),
    reducer: handleActions({
        [FETCH_MOVIES]: (state, action) => ({
            ...state,
            all: action.movies
        }),
        [FETCH_MOVIE]: (state, action) => ({
            ...state,
            current: action.movie
        })
    }, {
        movies: [],
        movie: {}
    })
}

// const FETCH_MOVIES = 'movies/FETCH_MOVIES'
// const FETCH_MOVIE = 'movies/FETCH_MOVIE'
// const initialState = {
//     movies: [],
//     movie: {}
// }

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case FETCH_MOVIES:
//             return {
//                 ...state,
//             }
//         case FETCH_MOVIE:
//             return {
//                 ...state,
//                 current: action.movie
//             }
//     }
// }
// module.exports = {
//     reducer
// }
