import React, { Component } from 'react';
import Social from '../components/social';
import StudentsTable from '../components/studentsTable';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: JSON.parse(localStorage.getItem('Students')) || [],
      foundStudents: [],
    };
  }

  onFormSubmit(event) {
    event.preventDefault();
    const students = JSON.parse(localStorage.getItem('Students')) || [];
    const fullName = {};
    const foundStudents = this.state.students.filter(
      (student) =>
        student.firstName === fullName.first && student.lastName === fullName.last
    );
    this.setState({ foundStudents });
  }

  render() {
    return (
      <div className='condiv'>
        <br />
        <h2>{'Search for a student:'}</h2>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={this.onFormSubmit} id='search-student-form'>
              <div className='form-group mb-3 leftHlaf'>
                <label htmlFor='firstName'>
                  <strong>First Name</strong>
                </label>
                <span>
                  <input
                    id='firstName'
                    type='text'
                    required={true}
                    className='form-control'
                    value={this.state.firstName}
                  />
                </span>
              </div>
              <div className='form-group mb-3 rightHalf'>
                <label htmlFor='lastName'>
                  <strong>Last Name</strong>
                </label>
                <input
                  id='lastName'
                  type='text'
                  required={true}
                  className='form-control'
                  value={this.state.lastName}
                />
              </div>

              <div className='d-grid mt-3'>
                <button type='submit' className='btn btn-primary btn-block'>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <br />
        <StudentsTable students={this.state.foundStudents} title='Found Students:' />
        <br />
        <Social />
      </div>
    );
  }
}

export default Search;
