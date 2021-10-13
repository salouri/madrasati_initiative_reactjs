import React, { Component } from 'react';

export default class StudentForm extends Component {
  DATA;

  constructor(props) {
    super(props);

    this.eventCurrentField = this.eventCurrentField.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      nationality: '',
      currentGPA: '',
      previousGPA: '',
    };
  }

  // Event handlers
  eventCurrentField(field, event) {
    this.setState({ [field]: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const newStudent = this.state;
    localStorage.setItem('student_form', JSON.stringify(newStudent));
    let students = JSON.parse(localStorage.getItem('Students')) || [];
    newStudent.id = students.length + 1;
    students.push(newStudent);
    localStorage.setItem('Students', JSON.stringify(students));
    // reset form since it has "controlled" fields
    this.setState({
      firstName: '',
      lastName: '',
      dob: '',
      nationality: '',
      currentGPA: '',
      previousGPA: '',
    });

    this.divSuccess.insertAdjacentHTML(
      'beforeend',
      '<p class="submitSuccess">Student registered successfully!</p>'
    );
    setTimeout(() => {
      this.divSuccess.querySelector(':last-child').remove();
    }, 3000);
  }

  render() {
    return (
      <div className='container'>
        <br />
        <h2>{'Register a new student:'}</h2>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={this.onFormSubmit} id='register-student-form'>
              <div className='form-group mb-3'>
                <label>
                  <strong>First Name</strong>
                </label>
                <input
                  type='text'
                  required={true}
                  className='form-control'
                  value={this.state.firstName}
                  onChange={this.eventCurrentField.bind(this, 'firstName')}
                />
              </div>
              <div className='form-group mb-3'>
                <label>
                  <strong>Last Name</strong>
                </label>
                <input
                  type='text'
                  required={true}
                  className='form-control'
                  value={this.state.lastName}
                  onChange={this.eventCurrentField.bind(this, 'lastName')}
                />
              </div>
              <div className='form-group mb-3'>
                <label>
                  <strong>Date of Birth</strong>
                </label>
                <input
                  type='date'
                  required={true}
                  max={new Date()}
                  className='form-control'
                  value={this.state.dob}
                  onChange={this.eventCurrentField.bind(this, 'dob')}
                />
              </div>
              <div className='form-group mb-3'>
                <label>
                  <strong>Nationality</strong>
                </label>
                <input
                  type='text'
                  className='form-control'
                  value={this.state.nationality}
                  onChange={this.eventCurrentField.bind(this, 'nationality')}
                />
              </div>
              <div className='form-group mb-3'>
                <label>
                  <strong>Previous GPA</strong>
                </label>
                <input
                  type='number'
                  step='.01'
                  min='0'
                  max='4'
                  className='form-control'
                  value={this.state.previousGPA}
                  onChange={this.eventCurrentField.bind(this, 'previousGPA')}
                />
              </div>
              <div className='form-group mb-3'>
                <label>
                  <strong>Current GPA</strong>
                </label>
                <input
                  type='number'
                  step='.01'
                  min='0'
                  max='4'
                  className='form-control'
                  value={this.state.currentGPA}
                  onChange={this.eventCurrentField.bind(this, 'currentGPA')}
                />
              </div>
              <div className='d-grid mt-3'>
                <button type='submit' className='btn btn-primary btn-block'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <br />
        <div
          ref={(divElem) => {
            this.divSuccess = divElem;
          }}
        ></div>
        <br />
      </div>
    );
  }
}
