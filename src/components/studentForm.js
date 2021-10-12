import React, { Component } from 'react';

export default class StudentForm extends Component {
  DATA;

  constructor(props) {
    super(props);

    this.eventFirstName = this.eventFirstName.bind(this);
    this.eventLastName = this.eventLastName.bind(this);
    this.eventDOB = this.eventDOB.bind(this);
    this.eventNationality = this.eventNationality.bind(this);
    this.eventCurrentGPA = this.eventCurrentGPA.bind(this);
    this.eventPreviousGPA = this.eventPreviousGPA.bind(this);

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
  eventFirstName(event) {
    this.setState({ firstName: event.target.value.trim() });
  }

  eventLastName(event) {
    this.setState({ lastName: event.target.value.trim() });
  }

  eventDOB(event) {
    this.setState({ dob: event.target.value });
  }

  eventNationality(event) {
    this.setState({ nationality: event.target.value.trim() });
  }

  eventCurrentGPA(event) {
    this.setState({ currentGPA: event.target.value });
  }

  eventPreviousGPA(event) {
    this.setState({ previousGPA: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const newStudent = this.state;
    localStorage.setItem('student_form', JSON.stringify(newStudent));
    let students = JSON.parse(localStorage.getItem('Students')) || [];
    newStudent.id = students.length + 1;
    students.push(newStudent);
    localStorage.setItem('Students', JSON.stringify(students));
    // reset form with "controlled" fields
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
                  value={this.state.firstName || 'first'}
                  onChange={this.eventFirstName}
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
                  value={this.state.lastName || 'last'}
                  onChange={this.eventLastName}
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
                  value={this.state.dob || '1900-01-01'}
                  onChange={this.eventDOB}
                />
              </div>
              <div className='form-group mb-3'>
                <label>
                  <strong>Nationality</strong>
                </label>
                <input
                  type='text'
                  className='form-control'
                  value={this.state.nationality || 'Jordan'}
                  onChange={this.eventNationality}
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
                  value={this.state.previousGPA || 2}
                  onChange={this.eventPreviousGPA}
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
                  value={this.state.currentGPA || 3.4}
                  onChange={this.eventCurrentGPA}
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
