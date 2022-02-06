import React from 'react'
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'
import './sign-up.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      comfirmPassword: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { displayName, email, password, comfirmPassword } = this.state
    if (comfirmPassword !== password) {
      alert('Sorry, your password does not match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )

      await createUserProfileDoc(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        comfirmPassword: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, comfirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="comfirmPassword"
            value={comfirmPassword}
            onChange={this.handleChange}
            label="Comfirm Password"
            required
          ></FormInput>

          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
