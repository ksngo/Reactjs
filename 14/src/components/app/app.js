const React = require('react')
const { connect } = require('react-redux')
const styles = require('./app.css')

class App extends React.Component {
  render() {
    const {
      children
    } = this.props

    return (
      <div className={styles.app}>
        {children}
      </div>
    )
  }
}

//** (1) Connect App component to the Store. connect() is provided by react-redux. */
//** (2) the App component is referred in src/routes.js as <Route path="/" component={App}></Route> */
//** (3) the children here refers to the components between App component in src/routes.js */
module.exports = connect()(App)