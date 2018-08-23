// Compt for copying as a template
// This compt is used for...

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import PropTypes from 'prop-types'
import Rx from 'rxjs'
import {
  Switch,
  Route,
  withRouter,
  Redirect,
} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'
import 'antd-mobile/dist/antd-mobile.css'
import 'antd/dist/antd.css'
import AppRootMechanics from './AppRootMechanics'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'

class AppRoot extends Component {

	render() {
    return (
      <Switch>

        <Route exact path='/' render={HomePage} />
        <Route exact path='/form' render={FormPage} />

      </Switch>
    )
	}
}

// defines the types of variables in this.props
AppRoot.propTypes = {
	history: PropTypes.object.isRequired,
}

// for all optional props, define a default value
AppRoot.defaultProps = {
}

// Wrap the prop in Radium to allow JS styling
const RadiumHOC = Radium(AppRoot)

// Get access to state from the Redux store
const mapReduxToProps = (redux) => {
	return {
	}
}

// Connect together the Redux store with this React component
const AppRootKernal =  withRouter(
	connect(mapReduxToProps, {
	})(RadiumHOC)
)

export default AppRootMechanics(AppRootKernal)

// ===============================

// the JS function that returns Radium JS styling
const comStyles = () => {
	return {
		container: {
      display: 'flex',
      flexDirection: 'column',
		},
    bottom_nav_bar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px',
    },
    bottom_nav_button: {
      display: 'flex',
      flexDirection: 'column',
      width: '25vw',
      justifyContent: 'center',
      alignItems: 'center',
    }
	}
}
