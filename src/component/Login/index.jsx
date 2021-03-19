import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import '../css/login.css'
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
}
LoginForm.defaultProps = {
  onSubmit: null,
}
function LoginForm(props) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { onSubmit } = props;
  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onSubmitHandle = (e) => {
    //chan loading web
    e.preventDefault();
    if (!onSubmit) { console.log("a") }
    else {
      onSubmit(formData);
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form
            className="box"
            onSubmit={(e) => { onSubmitHandle(e) }}
          >
            <h1>Login</h1>
            <p className="text-muted"> Please enter your login and password!</p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => {
                onChangeHandle(e)
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => {
                onChangeHandle(e)
              }}
            />
            <a className="forgot text-muted">Forgot password?</a>
            <input
              type="submit"
              name=""
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;

