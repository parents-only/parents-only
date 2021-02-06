import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER, UPDATE_USER_WITH_AVATAR } from '../../utils/mutations';
import './index.css';
import { useStore } from 'react-redux';

const EditProfile = () => {
  const state = useStore().getState();

  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: "", email: "", bio: "", age: 0 });
  useEffect(() => {
    setUserFormData(state.user)
  }, [state])
  const [editUser, { error }] = useMutation(UPDATE_USER);
  const [editUserWithAvatar, { error: errorWithAvatar }] = useMutation(UPDATE_USER_WITH_AVATAR);
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [fileName, setFileName] = useState("Profile Picture")
  const [fileData, setFileData] = useState()
  const [userAddress, setUserAddress] = useState()

  const handleFileInput = (event) => {
    setFileData(event.target.files[0])
    setFileName(event.target.files[0].name || "Profile Picture")
  };

  const handleAddress = (event) => {
    setUserAddress(event.target.value)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      if (fileData) {
        await editUserWithAvatar({
          variables: {
            ...userFormData,
            age: parseInt(userFormData.age),
            avatar: fileData
          }
        });
      } else {
        await editUser({
          variables: {
            ...userFormData,
            age: parseInt(userFormData.age)
          }
        });
      }

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  return (
    <>
      <div id="topHalf">
        {/* <img src={"http://www.boostnet.in/wp-content/uploads/2016/10/Header-1.png"} alt="" /> */}
      </div>
        <h2>Edit Profile</h2>
      <div className="EditForm">
        {/* This is needed for the validation functionality above */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit} >
          {/* show alert if server response is bad */}
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your edit!
                </Alert>

          <Form.Group>
            <Form.Label htmlFor='username'>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your username'
              name='username'
              onChange={handleInputChange}
              value={userFormData.username}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Your email address'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='bio'>Bio</Form.Label>
            <Form.Control
              type='text'
              placeholder='Write about yourself'
              name='bio'
              onChange={handleInputChange}
              value={userFormData.bio}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='age'>Age</Form.Label>
            <Form.Control
              type='number'
              placeholder='Your age'
              name='age'
              onChange={handleInputChange}
              value={userFormData.age}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='address'>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your address'
              name='address'
              onChange={handleAddress}
              value={userAddress}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='avatar'>Avatar</Form.Label>
            <Form.File id="avatar" custom>
              <Form.File.Input
                onChange={handleFileInput}
                accept=".png"
              />
              <Form.File.Label data-browse="Choose File">
                {fileName}
              </Form.File.Label>
            </Form.File>
          </Form.Group>

          <Button
            disabled={!(userFormData.username || userFormData.email || userFormData.bio || userFormData.age || userAddress || fileName)}
            type='submit'
            variant='success'>
            Save Changes
        </Button>
        </Form>
        {(error || errorWithAvatar)&& <div>Sign up failed</div>}
      </div>
    </>

  );
};

export default EditProfile;
