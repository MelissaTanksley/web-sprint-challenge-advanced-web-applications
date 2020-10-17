import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import BubblePage from './components/BubblePage'
import Login from './components/utils/Login'
import './styles.scss'

const Login = {}

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        
        <PrivateRoute path="/BubblePage" component={BubblePage} />

      </div>
    </Router>
  );
}

export default App;
