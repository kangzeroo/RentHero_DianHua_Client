// Compt for copying as a HomePage
// This compt is used for...

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import PropTypes from 'prop-types'
import Rx from 'rxjs'
import { withRouter } from 'react-router-dom'
import {
	Input,
	Button,
	message,
} from 'antd'
import { getToken, voice, lookupNumber, } from '../../api/proxy/proxy_api'

class HomePage extends Component {

	constructor() {
		super()
		this.state = {
			number: '',

			muted: false,
			onPhone: false,

			log: ''
		}
	}

	// Initialize after component creation
  componentDidMount() {
    var self = this;

    // Fetch Twilio capability token from our Node.js server
    getToken()
			.then((data) => {
				console.log(data)
				Twilio.Device.setup(data.token)
				// console.log(device)
			})
			.catch((err) => {
				console.log(err)
				self.setState({log: 'Could not fetch token, see console.log'});
			})

    // Configure event handlers for Twilio Device
    Twilio.Device.disconnect(function() {
      self.setState({
        onPhone: false,
        log: 'Call ended.'
      });
    });

    Twilio.Device.ready(function() {
      self.log = 'Connected';
    });
  }


	initiateCall() {
		if (!this.state.onPhone) {

			lookupNumber(this.state.number)
				.then((data) => {
					console.log(data)
					this.setState({
						muted: false,
						onPhone: true,
					})

					Twilio.Device.connect({ number: data.formattedNumber })
					this.setState({
						log: 'Calling ' + data.formattedNumber
					})
					console.log('Calling ' + data.formattedNumber)
				})
				.catch((err) => {
					message.error(err.response.data)
					console.log(err)
				})
		} else {
			console.log('Hanging up')
			// hang up call in progress
			Twilio.Device.disconnectAll()
		}

	}


	render() {
		return (
			<div id='HomePage' style={comStyles().container}>
				<div style={comStyles().dialerBox}>
					<div style={comStyles().font_logo}>RentHero</div>
					<div style={comStyles().dianhua}>电话</div>
					<Input
						value={this.state.number}
						onChange={e => this.setState({ number: e.target.value })}
						placeholder='Dial Number'
						style={{ borderRadius: '25px', marginBottom: '80px', textAlign: 'center' }}
						size='large'
					/>
					<Button shape='circle' icon='phone' onClick={() => this.initiateCall()} style={this.state.onPhone ? { background: 'red', color: 'white', border: 'none', height: '75px', width: '75px', fontSize: '2rem', } : { background: 'lightgreen', color: 'white', border: 'none', height: '75px', width: '75px', fontSize: '2rem', }} >

					</Button>
				</div>
			</div>
		)
	}
}

// defines the types of variables in this.props
HomePage.propTypes = {
	history: PropTypes.object.isRequired,
	onPhone: PropTypes.bool,
}

// for all optional props, define a default value
HomePage.defaultProps = {
	onPhone: false,
}

// Wrap the prop in Radium to allow JS styling
const RadiumHOC = Radium(HomePage)

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
			height: '100vh',
			width: '100vw',
      display: 'flex',
      flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			background: '#56CCF2',  /* fallback for old browsers */
			background: '-webkit-linear-gradient(to right, #2F80ED, #56CCF2)',  /* Chrome 10-25, Safari 5.1-6 */
			background: 'linear-gradient(to right, #2F80ED, #56CCF2)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		},
		font_logo: {
      fontSize: '2.5rem',
      color: 'white',
      fontWeight: 'bold',
      fontFamily: `'Carter One', cursive`,
			cursor: 'pointer',
			paddingBottom: '20px',
    },
		dianhua: {
      fontSize: '2.0rem',
      color: 'white',
      fontWeight: 'bold',
      fontFamily: `'Carter One', cursive`,
			cursor: 'pointer',
			paddingBottom: '80px'
    },
		dialerBox: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
		}
	}
}
