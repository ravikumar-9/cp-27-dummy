// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitFormData = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.status === 200) {
      const {history} = this.props
      history.push('/')
    } else {
      this.setState({errorMessage: "*UserName and Password Didn't Match"})
    }
  }

  render() {
    const {username, password, errorMessage} = this.state

    console.log(username)
    console.log(password)
    return (
      <div className="login-page-container">
        <div className="login-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-form-image"
          />
        </div>
        <div className="login-form-container">
          <div className="login-details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="web-logo"
            />
            <form className="form-container" onSubmit={this.submitFormData}>
              <div className="input-fields">
                <label className="label-name" htmlFor="name">
                  USERNAME
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Username"
                  onChange={this.onChangeUserName}
                />
              </div>
              <div className="input-fields">
                <label className="label-name" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  onChange={this.onChangePassword}
                />
                <p className="error-message">{errorMessage}</p>
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
