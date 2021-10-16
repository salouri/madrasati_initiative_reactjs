import React, { Component } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

export default class StudentForm extends Component {
  DATA;

  constructor(props) {
    super(props);
    this.eventCurrentField = this.eventCurrentField.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      student: {
        firstName: '',
        lastName: '',
        dob: '',
        nationality: '',
        currentGPA: '',
        previousGPA: '',
      },
      nationalities: [
        'Afghan',
        'Albanian',
        'Algerian',
        'American',
        'Andorran',
        'Angolan',
        'Antiguans',
        'Argentinean',
        'Armenian',
        'Australian',
        'Austrian',
        'Azerbaijani',
        'Bahamian',
        'Bahraini',
        'Bangladeshi',
        'Barbadian',
        'Barbudans',
        'Batswana',
        'Belarusian',
        'Belgian',
        'Belizean',
        'Beninese',
        'Bhutanese',
        'Bolivian',
        'Bosnian',
        'Brazilian',
        'British',
        'Bruneian',
        'Bulgarian',
        'Burkinabe',
        'Burmese',
        'Burundian',
        'Cambodian',
        'Cameroonian',
        'Canadian',
        'Cape Verdean',
        'Central African',
        'Chadian',
        'Chilean',
        'Chinese',
        'Colombian',
        'Comoran',
        'Congolese',
        'Costa Rican',
        'Croatian',
        'Cuban',
        'Cypriot',
        'Czech',
        'Danish',
        'Djibouti',
        'Dominican',
        'Dutch',
        'East Timorese',
        'Ecuadorean',
        'Egyptian',
        'Emirian',
        'Equatorial Guinean',
        'Eritrean',
        'Estonian',
        'Ethiopian',
        'Fijian',
        'Filipino',
        'Finnish',
        'French',
        'Gabonese',
        'Gambian',
        'Georgian',
        'German',
        'Ghanaian',
        'Greek',
        'Grenadian',
        'Guatemalan',
        'Guinea-Bissauan',
        'Guinean',
        'Guyanese',
        'Haitian',
        'Herzegovinian',
        'Honduran',
        'Hungarian',
        'Icelander',
        'Indian',
        'Indonesian',
        'Iranian',
        'Iraqi',
        'Irish',
        'Israeli',
        'Italian',
        'Ivorian',
        'Jamaican',
        'Japanese',
        'Jordanian',
        'Kazakhstani',
        'Kenyan',
        'Kittian and Nevisian',
        'Kuwaiti',
        'Kyrgyz',
        'Laotian',
        'Latvian',
        'Lebanese',
        'Liberian',
        'Libyan',
        'Liechtensteiner',
        'Lithuanian',
        'Luxembourger',
        'Macedonian',
        'Malagasy',
        'Malawian',
        'Malaysian',
        'Maldivan',
        'Malian',
        'Maltese',
        'Marshallese',
        'Mauritanian',
        'Mauritian',
        'Mexican',
        'Micronesian',
        'Moldovan',
        'Monacan',
        'Mongolian',
        'Moroccan',
        'Mosotho',
        'Motswana',
        'Mozambican',
        'Namibian',
        'Nauruan',
        'Nepalese',
        'New Zealander',
        'Ni-Vanuatu',
        'Nicaraguan',
        'Nigerien',
        'North Korean',
        'Northern Irish',
        'Norwegian',
        'Omani',
        'Pakistani',
        'Palauan',
        'Panamanian',
        'Papua New Guinean',
        'Paraguayan',
        'Peruvian',
        'Polish',
        'Portuguese',
        'Qatari',
        'Romanian',
        'Russian',
        'Rwandan',
        'Saint Lucian',
        'Salvadoran',
        'Samoan',
        'San Marinese',
        'Sao Tomean',
        'Saudi',
        'Scottish',
        'Senegalese',
        'Serbian',
        'Seychellois',
        'Sierra Leonean',
        'Singaporean',
        'Slovakian',
        'Slovenian',
        'Solomon Islander',
        'Somali',
        'South African',
        'South Korean',
        'Spanish',
        'Sri Lankan',
        'Sudanese',
        'Surinamer',
        'Swazi',
        'Swedish',
        'Swiss',
        'Syrian',
        'Taiwanese',
        'Tajik',
        'Tanzanian',
        'Thai',
        'Togolese',
        'Tongan',
        'Trinidadian or Tobagonian',
        'Tunisian',
        'Turkish',
        'Tuvaluan',
        'Ugandan',
        'Ukrainian',
        'Uruguayan',
        'Uzbekistani',
        'Venezuelan',
        'Vietnamese',
        'Welsh',
        'Yemenite',
        'Zambian',
        'Zimbabwean',
      ],
    };
  }
  // Event handlers
  eventCurrentField(field, event) {
    const studentTemp = { ...this.state.student };
    studentTemp[field] = event.target.value;
    this.setState({ student: studentTemp });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const newStudent = this.state.student;
    Object.keys(newStudent).forEach((k) => (newStudent[k] = newStudent[k].trim()));
    localStorage.setItem('student_form', JSON.stringify(newStudent));
    let students = JSON.parse(localStorage.getItem('Students')) || [];
    newStudent.id = students.length + 1;
    students.push(newStudent);
    localStorage.setItem('Students', JSON.stringify(students));
    // reset form since it has "controlled" fields
    this.setState({
      student: {
        firstName: '',
        lastName: '',
        dob: '',
        nationality: '',
        currentGPA: '',
        previousGPA: '',
      },
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
      <Card style={{ width: '65%', display: 'inline-block' }}>
        <Card.Body>
          <Form onSubmit={this.onFormSubmit.bind(this)} id='register-student-form'>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>First Name</strong>
              </Form.Label>
              <Form.Control
                id='firstName'
                placeholder='First Name'
                type='text'
                required={true}
                value={this.state.student.firstName}
                onChange={this.eventCurrentField.bind(this, 'firstName')}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>Last Name</strong>
              </Form.Label>
              <Form.Control
                type='text'
                required={true}
                value={this.state.student.lastName}
                onChange={this.eventCurrentField.bind(this, 'lastName')}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>Date of Birth</strong>
              </Form.Label>
              <Form.Control
                type='date'
                required={true}
                max={new Date()}
                value={this.state.student.dob}
                onChange={this.eventCurrentField.bind(this, 'dob')}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>Nationality</strong>
              </Form.Label>
              <Form.Control
                as='select'
                name='nationality'
                required={true}
                value={this.state.student.nationality}
                onChange={this.eventCurrentField.bind(this, 'nationality')}
              >
                <option value='' selected disabled hidden>
                  select from list
                </option>
                {this.state.nationalities.map((nation, index) => (
                  <option key={index} value={nation.toLowerCase()}>
                    {nation}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>Previous GPA</strong>
              </Form.Label>
              <Form.Control
                type='number'
                step='.01'
                min='0'
                max='4'
                value={this.state.student.previousGPA}
                onChange={this.eventCurrentField.bind(this, 'previousGPA')}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>Current GPA</strong>
              </Form.Label>
              <Form.Control
                type='number'
                step='.01'
                min='0'
                max='4'
                value={this.state.student.currentGPA}
                onChange={this.eventCurrentField.bind(this, 'currentGPA')}
              />
            </Form.Group>
            <Button type='submit' className='btn btn-primary btn-block'>
              Submit
            </Button>
          </Form>

          <br />
          <div
            ref={(divElem) => {
              this.divSuccess = divElem;
            }}
          ></div>
        </Card.Body>
      </Card>
    );
  }
}
