import React, { PureComponent } from 'react';
import axios from 'axios';

export default class Register extends PureComponent {
  handleSubmit = async (event) => {
    event.preventDefault();

    const { fname, lname, email, password } = event.target.elements;

    try {
      // Send a POST request to the /register endpoint on the server
      await axios.post('/register', {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value
      });

      // Registration successful, you can redirect the user to the login page
      // Replace "/login" with the actual login page URL
      window.location.href = "/login";
    } catch (error) {
      // Handle registration error
      console.error("Registration failed", error);
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="text-center text-dark mt-5">Please Fill Your Details Here!!</h2>
              <div className="card my-5">
                <form className="card-body cardbody-color p-lg-5" onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="fname" placeholder="First Name" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="lname" placeholder="Last Name" />
                  </div>
                  <div className='mb-3'>
                    <input type="text" className="form-control" id="email" placeholder="Email Id" />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" id="newpassword" placeholder="Create a Password" />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm the Password" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-color px-5 mb-5 w-100">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
