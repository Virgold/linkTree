import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormData() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className="mb-3">

                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter your first name"
                    />

                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter your last name"
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
            </Row>

            <Row className="mb-3">

                <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="yourname@email.com" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a Valid email.
                    </Form.Control.Feedback>
                </Form.Group>

            </Row>

            <Row className="mb-3">

                <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="send me a message and I'll reply as soon as possible..."
                        required
                        style={{ height: '132px' }}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a message
                    </Form.Control.Feedback>
                </Form.Group>

            </Row>

            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="You agree to providing your data to Chukwuma Onuoha who may contact you."
                    // feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>

            <Button type="submit">Submit form</Button>

        </Form>
    );
}

export default FormData