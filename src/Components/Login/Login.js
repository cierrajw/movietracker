import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Route, NavLink } from 'react-router-dom'
import HeaderLogin from './HeaderLogin/HeaderLogin'
import { loginUser, createAccount } from '../../Actions'
import { fetchUser } from '../../Thunks/fetchUser';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // email: 'tman2272@aol.com',
      email: '',
      username: '',
      formState: '',
      password: '',
      // password: 'password',
    }
  }

  async componentDidMount() { }

  toggleActive = () => {
    const {createAccount} = this.props
    this.props.active === ""
      ? createAccount('active')
      : createAccount('');
  };

  resetForm = () => {
    this.setState({ password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  submitLogin = e => {
    const { fetchUser } = this.props
    const { email, password } = this.state
    e.preventDefault()
    fetchUser(email, password)
    this.resetForm()
  }

  render() {
    const { email, username, password } = this.state
    return (
      <section className="login-main">
        <HeaderLogin />
        {/* <nav>
          <NavLink to="/">Home</NavLink>
        </nav> */}
        <div className="user-image"></div>
        <section className='form-container'>
          <section className={this.props.active}>
            <form
              className="login-form"
              onSubmit={this.submitLogin}
              aria-label="Existing user login form"
            >
              <p>Login</p>
              <h2>Welcome Back</h2>
              <label className="email-input">
                <input
                  tabIndex="0"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  className="email-text"
                />
              </label>
              <hr />
              <label>
                <input
                  tabIndex="0"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                  className='password-text'
                />
              </label>
              <button className='submit-button'>Submit</button>
              <div className="create-account" onClick={this.toggleActive}>Create Account</div>
            </form>
          </section>

          <form
            className="login-new-user"
            onSubmit={this.submitLogin}
            aria-label="Create new MovieTracker account"
          >
            <h2 className="new-user-h2">Create Account</h2>
            <label>
              <input
                className="new-user-username"
                tabIndex="1"
                name="username"
                placeholder="Username"
                type="text"
                value={username}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              <input
                className="new-user-email"
                tabIndex="2"
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              <input
                className="new-user-password"
                tabIndex="3"
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <button tabIndex="1" className="new-user-submit">Submit</button>
            <div className="create-account" onClick={this.toggleActive}>Back to Login</div>
          </form>
        </section>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  active: state.createAccount.class
})

export const mapDispatchToProps = dispatch => ({
  fetchUser: (user, password) => dispatch(fetchUser(user, password)),
  createAccount: (string) => dispatch(createAccount(string))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
