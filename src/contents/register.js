import React, { Component } from 'react';

import Social from '../components/social';
import StudentForm from '../components/studentForm';

class Register extends Component {
  render() {
    return (
      <div className='condiv'>
        <h2 className='subtopic'>{'Register a new student:'}</h2>
        <StudentForm />
        <br /> <br />
        <Social />
      </div>
    );
  }
}

export default Register;
