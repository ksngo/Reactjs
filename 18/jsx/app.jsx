const React = require('react')
const ReactDOM = require ('react-dom')
const ReactRouter = require('react-router')
const History = require('history')

const Product = require('./product.jsx')
const Modal = require('./modal.jsx')
const Checkout = require('./checkout.jsx')
const Cart = require('./cart.jsx')
const {withRouter} = require('react-router')

// const posts = require('../posts.js')

console.log('testing')
// let { Router,
//   Route,
//   Link
// } = ReactRouter

// let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
//   queryKey: false
// })

// ReactDOM.render((
//   <Router history={hashHistory}>
//     <Route path="/" component={Product} >
//       <Route path="/product/:id" component={modal} />
//     </Route>
//     <Route path="/cart" component={Cart} posts={posts}/>
//     <Route path="/checkout" component={Checkout}  posts={posts}/>
//     <Route path="/contact" component={withRouter(Contact)} />
//   </Router>
// ), document.getElementById('content'))