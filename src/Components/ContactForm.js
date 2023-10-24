import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Control, LocalForm, Errors  } from 'react-redux-form';
import {Row, Label, Col, Button} from "reactstrap";
class ContactForm extends Component {
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }
  render() {    
    return (
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <Row className="form-group">
                <Label htmlFor="firstname" md={2}>First Name</Label>
                <Col md={10}>
                    <Control.text model=".firstname" id="firstname" name="firstname"
                        placeholder="First Name"
                        className="form-control"
                        />
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor="lastname" md={2}>Last Name</Label>
                <Col md={10}>
                    <Control.text model=".lastname" id="lastname" name="lastname"
                        placeholder="Last Name"
                        className="form-control"
                        />
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                <Col md={10}>
                    <Control.text model=".telnum" id="telnum" name="telnum"
                        placeholder="Tel. Number"
                        className="form-control"
                        />
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor="email" md={2}>Email</Label>
                <Col md={10}>
                    <Control.text model=".email" id="email" name="email"
                        placeholder="Email"
                        className="form-control" />
                </Col>
            </Row>                
            <Row className="form-group">
                <Col md={{size:10, offset: 2}}>
                    <Button type="submit" color="primary">
                    Send Feedback
                    </Button>
                </Col>
            </Row>
    </LocalForm>
    );
  }
}
// Decorate the form component
ContactForm = reduxForm({
  form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;