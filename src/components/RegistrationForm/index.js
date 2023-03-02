// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    formSubmitted: false,
    firstName: '',
    lastName: '',
    firstNameErrorMsg: false,
    lastNameErrorMsg: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({formSubmitted: true})
    } else {
      this.setState({
        firstNameErrorMsg: firstName === '',
        lastNameErrorMsg: lastName === '',
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameErrorMsg: true})
    } else {
      this.setState({firstNameErrorMsg: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameErrorMsg: true})
    } else {
      this.setState({lastNameErrorMsg: false})
    }
  }

  registrationForm = () => {
    const {
      firstName,
      lastName,
      firstNameErrorMsg,
      lastNameErrorMsg,
    } = this.state
    const firstNameInput = firstNameErrorMsg
      ? 'name-input-field error-field'
      : 'name-input-field'

    const lastNameInput = lastNameErrorMsg
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label className="input-label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            value={firstName}
            className={firstNameInput}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
          {firstNameErrorMsg && <p className="error-message">Required</p>}
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            value={lastName}
            className={lastNameInput}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
          {lastNameErrorMsg && <p className="error-message">Required</p>}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({formSubmitted: false, firstName: '', lastName: ''})
  }

  submitSuccess = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {formSubmitted} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="view-container">
          {formSubmitted ? this.submitSuccess() : this.registrationForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
