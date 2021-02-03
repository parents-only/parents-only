import React, {useEffect, useState} from 'react'
import { Button, Alert, Form, FormControl, Image} from 'react-bootstrap'

import Auth from '../../utils/auth'
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { useQuery, useMutation } from '@apollo/react-hooks';
import {Redirect, useParams} from 'react-router-dom'
import FormFileInput from 'react-bootstrap/esm/FormFileInput';



const EditProfile = () => {
  
    const { username: userParam } = useParams();

    const [{ loading, data }] = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
        // Now if there's a value in userParam that we got from the URL bar, we'll use that value to run the QUERY_USER query. If there's no value in userParam, like if we simply visit /profile as a logged-in user, we'll execute the QUERY_ME query instead.
    });

    const user = data?.me || data?.user || {};
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

  const clickSubmit = () => {
    let userData = new FormData()
    user.name && userData.append('name', user.name)
    user.email && userData.append('email', user.email)
    user.password && userData.append('passoword', user.passoword)
    user.bio && userData.append('bio', user.bio)
    user.avatar && userData.append('avatar', user.avatar)

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to='/profile/edit' />;
        // With this, we're checking to see if the user is logged in and if so, if the username stored in the JSON Web Token is the same as the userParam value. If they match, we return the <Redirect> component with the prop to set to the value /profile, which will redirect the user away from this URL and to the /profile route.
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
        <h4>
            You need to be logged in to see this page. Use the navigation links above to sign up or log in!
        </h4>
        );
    }


  const handleChange = name => (event) => {
    const data = name === 'avatar';
    data({ ...data, [name]: loading });
  };
    const avatarUrl = user.id
                 ? `/api/users/avatar/${user.id}?${new Date().getTime()}`
                 : '/api/users/defaultavatar'
    if (user.redirectToProfile) {
      return (<Redirect to={'/profile' + user.username}/>)
    }

    return (
        <Form noValidate validated={validated} onSubmit={clickSubmit}>
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
            onChange={handleChange}
            value={user.username}
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
            onChange={handleChange}
            value={user.email}
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
            onChange={handleChange}
            value={user.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
        <Form.Label htmlFor='bio'>Bio</Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Your bio'
            name='bio'
            onChange={handleChange}
            value={user.bio}
          />
        </Form.Group>

        <Form.Group>
        <Form.Label htmlFor='avatar'>Bio</Form.Label>
          <FormFileInput
            type='upload'
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
            name='avatar'
            onChange={handleChange}
            value={user.avatar}
          />
        </Form.Group>


        <Button
          color="primary" variant="contained" onClick={clickSubmit} >Submit
          Submit
        </Button>
      </Form>
      
  )}}
  

export default EditProfile;