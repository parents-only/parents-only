import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignupForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', age: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    async function success(position) {
        const {
            data
        } = await addUser({
            variables: {
                ...userFormData,
                age: parseInt(userFormData.age),
                location: [position.coords.latitude, position.coords.longitude]
            }
        });
        Auth.login(data.addUser.token);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            if (!navigator.geolocation) {
                setShowAlert(true)
                alert("Geolocation must be allowed to sign up, location is used to search for friends physically nearby")
            } else {
                navigator.geolocation.getCurrentPosition(success, function() {
                    setShowAlert(true)
                    alert("Unable to retrieve location, cannot sign up.")
                })
            }
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
            age: '',
        });
    };

    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your signup!
                </Alert>

                <Form.Group>
                    <Form.Label htmlFor='username'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your username'
                        name='username'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Your email address'
                        name='email'
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Your password'
                        name='password'
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='age'>Age</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Your age'
                        name='age'
                        onChange={handleInputChange}
                        value={userFormData.age}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Age is required!</Form.Control.Feedback>
                </Form.Group>

                <Button
                    disabled={!(userFormData.username && userFormData.email && userFormData.password && userFormData.age)}
                    type='submit'
                    variant='success'>
                    Submit
        </Button>
            </Form>
            {error && <div>Sign up failed</div>}
        </>
    );
};

export default SignupForm;
