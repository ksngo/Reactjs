const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const movies = require('../../movies.json')
//**(1) this is function that inside modules/movies.js that will update the state inside the modules/movies.js module. */
const {
  fetchMoviesActionCreator
} = require('modules/movies.js')
const styles = require('./movies.css')

class Movies extends React.Component {
  //**(2)can simply draw the json because movies have been drawn by require */
  //**(3)Movies component have props fetchMovies function make possible by the connect() function. */
  componentWillMount() {
    this.props.fetchMovies(movies)
  }
  //**(4)alternatively, without require, can do a fetch request and is best done in componentDidMount() */
  // Comment componentWillMount() and uncomment componentDidMount to use async fetch

  // componentDidMount() {
  //   fetch('/src/movies.json', {method: 'GET'})
  //     .then((response)=>{return response.json()})
  //     .then((movies)=>{
  //       this.props.fetchMovies(movies)
  //     })
  // }

  //**(5)matching item in objects in this.props  */
  //**(6) children should be the content placed between <Movies> </Movies> */
  //**(7) movies are added to this.props by connect() provided by react-redux */
  //**(8) params contains the :id */
  //**(9) the Movies component referred in src/routes.js , '<Route component={Movies}></Route>'  */
  //**(10) the children here refers to <Route path=":id" component={Movie} />  */
  render() {
    const {
      children,
      movies = [],
      params = {}
    } = this.props

    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/movies/${index + 1}`}>
              <div
                className={styles.movie}
                style={{ backgroundImage: `url(${movie.cover})` }} />
            </Link>
          ))}
        </div>
        {children}
      </div>
    )
  }
}

//**(9) connect()(Movies) will connect component Movies to the store */
//**(10) the component will now have 'movies'  property added. */
//**(11) movies.all refers to the state in modules/movies.js */
//**(12) the component will have 'fetchMovies' property added */
//**(13) featchMoviesActionCreator function is brought in by require() from modules/movies.js */

module.exports = connect(({ movies }) => ({
  movies: movies.all
}), {
  fetchMovies: fetchMoviesActionCreator
})(Movies)