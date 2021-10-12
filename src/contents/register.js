import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import madrasatipic from '../img/madrasati_logo.png';
import Social from '../components/social';
import StudentForm from '../components/studentForm';

class Register extends Component {
  render() {
    return (
      <div className='condiv register'>
        <img src={madrasatipic} className='profilepic' alt='Madrasati Logo'></img>
        <ReactTypingEffect
          className='typingeffect'
          text={[
            'Madrasati',
            'improving the educational environment of Jordan’s most neglected public schools',
          ]}
          speed={100}
          eraseDelay={700}
          displayTextRenderer={(text, i) => {
            return i === 0 ? <h1>{text}</h1> : text;
          }}
        />

        <StudentForm />

        <Social />
      </div>
    );
  }
}

export default Register;
