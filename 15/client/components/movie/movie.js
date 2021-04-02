const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const axios = require('axios')
const clean = require('clean-tagged-string').default
//**(1) fetchMovieActionCreator is a function from modules/movies.js */
//**(2) this function will update in the store(modules/movies.js) on the current property */
const {
  fetchMovieActionCreator
} = require('modules/movies.js')
const styles = require('./movie.css')

class Movie extends React.Component {

  //**(3) call the local method instead of this.props.fetchMovie() I think this is to update the store on the current property with the movie based on current params.id */
  componentWillMount() {
    this.fetchMovie(this.props.params.id)
  }
  //**(4) If there are changes to params.id.....what is next? */
  componentWillUpdate(next) {
    if (this.props.params.id !== next.params.id) {
      this.props.fetchMovie(next.params.id)
    }
  }

  //**(8) clean will change the multiline template literal to single line. Query cannot take in multiline template literal  */
  //**(9) this.props.fetchMovie points to fetchMovieActionCreator */
  //**(10) response is the server response for graphql that is setup in server/index.js. It contains the movie data.  */
  //**(11) fetchMovie(response) will store the response or data in the store(redux) which is available by this.props.movie(make available by the connect() below ) */
  fetchMovie(id = this.props.params.id) {
    const query = clean`{
      movie(index:${id}) {
        title,
        cover,
        year,
        starring {
          name
        }
      }
    }`

    axios.get(`/q?query=${query}`).then(response => {
      this.props.fetchMovie(response)
    })
  }

  //**(5) draw from component properties(this.props) on the movie item */
  render() {
    const {
      movie = {
        starring: []
      }
    } = this.props

    return (
      <div
        className={styles.movie}
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
        <div
          className={styles.cover}
          style={{backgroundImage: `url(${movie.cover})`}} />
        <div className={styles.description}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.year}>{movie.year}</div>
          <div className={styles.starring}>
            {movie.starring.map((actor = {}, index) => (
              <div
                key={index}
                className={styles.actor}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link
          className={styles.closeButton}
          to="/movies">
          ←
        </Link>
      </div>
    )
  }
}

//**(6) create a movie property for Movie component. This property will take values from Store(modules/movie.js) state(that consists current property). */
//**(7) crate a featchMovie property for Movie component. fetchMovieActionCreator function from Store(modules/movie.js) */
module.exports = connect(({movies}) => ({
  movie: movies.current
}), {
  fetchMovie: fetchMovieActionCreator
})(Movie)