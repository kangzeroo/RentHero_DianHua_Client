// Compt for copying as a FormPage
// This compt is used for...

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import PropTypes from 'prop-types'
import Rx from 'rxjs'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import {
  ActivityIndicator,
	Card,
  InputItem,
  List,
  Button,
} from 'antd-mobile'


class FormPage extends Component {

	constructor() {
		super()
		this.state = {
      email: '',
      phone: '',
      loading: false,
      error_messages: [],
		}
	}

  componentDidMount() {
    // exit keyboard on press enter
    document.getElementById('email').addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        document.getElementById('phone').blur()
      }
    })
  }

	render() {
		return (
			<div id='FormPage' style={comStyles().container}>
          <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'white', margin: '20px' }}>Form</div>
          <div style={comStyles().entrance}>
            <List>
              <List.Item>
                <InputItem
                  id='email'
                  value={this.state.email}
                  onChange={(v) => this.setState({ email: v })}
                  placeholder='Email'
                  style={comStyles().inputtext} />
              </List.Item>
              <br /><br />
              <List.Item>
                <InputItem
                  id='phone'
                  value={this.state.phone}
                  onChange={(v) => this.setState({ phone: v })}
                  placeholder='Phone'
                  style={comStyles().inputtext} />
              </List.Item>
            </List>
            <br/><br/>
            <Button fullWidth type='primary' inline size='large' onClick={() => alert(`Clicked and got ${this.state.email} and ${this.state.phone}`)} style={comStyles().enter_button}>Enter</Button>
          </div>
			</div>
		)
  }
}

// defines the types of variables in this.props
FormPage.propTypes = {
	history: PropTypes.object.isRequired,
}

// for all optional props, define a default value
FormPage.defaultProps = {

}

// Wrap the prop in Radium to allow JS styling
const RadiumHOC = Radium(FormPage)

// Get access to state from the Redux store
const mapReduxToProps = (redux) => {
	return {

	}
}

// Connect together the Redux store with this React component
export default withRouter(
	connect(mapReduxToProps, {

	})(RadiumHOC)
)

// ===============================

// the JS function that returns Radium JS styling
const comStyles = () => {
	return {
		container: {
      display: 'flex',
      flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: '100vh',
			minWidth: '100vw',
			background: 'linear-gradient(269deg, #0bacbd, #1a76c1)',
      backgroundSize: 'cover',
			fontFamily: `'Lato', sans-serif`,
		},
    entrance: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
    },
    inputtext: {
      fontSize: '3rem',
      margin: '25px auto',
      width: '100%',
      height: '100px',
      padding: '20px',
    },
    enter_button: {
      fontSize: '3rem',
      padding: '20px',
      width: '100%',
      height: '100px',
      display: 'flex',
      flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
    }
	}
}
