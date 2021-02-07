import React from 'react';
import './index.css';
import MessageList from '../MessageList';
import MessageForm from '../MessageForm'
import FriendList from '../FriendList'
//import Status from '../Status'
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Redirect, useParams } from "react-router-dom";
// This component, Redirect, will allow us to redirect the user to another route within the application. Think of it like how we've used location.replace() in the past, but it leverages React Router's ability to not reload the browser!
import { ADD_FRIEND } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Button } from 'react-bootstrap';
import { useDispatch, useStore } from 'react-redux';
import { UPDATE_USER } from '../../utils/actions';
import Header from './Header-1.png'
import family2 from './family2.jpg'

const Profile = () => {
    const dispatch = useDispatch();
    const userState = useStore().getState().user;
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
        // Now if there's a value in userParam that we got from the URL bar, we'll use that value to run the QUERY_USER query. If there's no value in userParam, like if we simply visit /profile as a logged-in user, we'll execute the QUERY_ME query instead.
    });
    console.log(data);
    const user = data?.me || data?.user || {};
    user.gallery = user.gallery || []

    const [addFriend] = useMutation(ADD_FRIEND);

    function isObject(object) {
        return object != null && typeof object === 'object';
    }

    function deepEqual(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            const val1 = object1[key];
            const val2 = object2[key];
            const areObjects = isObject(val1) && isObject(val2);
            if (
                (areObjects && !deepEqual(val1, val2)) || (!areObjects && val1 !== val2)
            ) {
                return false;
            }
        }

        return true;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (!userParam && userState.username === undefined) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this page. Use the navigation links above to sign up or log in!
    //         </h4>
    //     );
    // }

    if ((!userParam && !loading) || deepEqual(userState, user)) {
        dispatch({
            type: UPDATE_USER,
            user: user
        })
    }

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to='/profile' />;
        // With this, we're checking to see if the user is logged in and if so, if the username stored in the JSON Web Token is the same as the userParam value. If they match, we return the <Redirect> component with the prop to set to the value /profile, which will redirect the user away from this URL and to the /profile route.
    }

    

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <div id="mainProfile">
                <div id="topHalf">
                    <img src={Header} alt="" />
                </div>
                <div id="bottomHalf">
                    <img src={user.avatar} alt={user.username} style={{ height: 150, width: 150 }} />

                    {userParam && (<Button variant="success" className="btn ml-auto centered" onClick={handleClick}>
                        Add Friend
                    </Button>)}

                </div>
            </div>
            <div className="wrapper" id="status">

                {!userParam &&
                    <MessageForm />}

                {!userParam &&
                    <MessageList />}

                <div className="grid-3">
                    <h4>Friends</h4>
                    <FriendList
                        username={user.username}
                        friendCount={user.friendCount}
                        friends={user.friends}
                    />
                </div>

                <div className="grid-4">

                    <h4>About me</h4>
                    <p>Age: {user.age}</p>
                    <p>Address: {user.address || "That's private"}</p>
                    <p>Bio: {user.bio}</p>
                </div>

                <div className="grid-5">
                    <h4>Photos</h4>
                    {/* <div id="gallery"> */}
                        {/* {user.gallery.map(friend => (
                            <div><img src={friend} alt="" /></div>
                        ))}
                    </div> */}

<div id="gallery">
  <div><img src="https://picsum.photos/600/600/?image=512"/><a href="#lightbox-1">512</a></div>
  <div><img src="https://picsum.photos/600/600/?image=513"/><a href="#lightbox-2">513</a></div>
  <div><img src="https://picsum.photos/600/600/?image=514"/><a href="#lightbox-3">514</a></div>
  <div><img src="https://picsum.photos/600/600/?image=515"/><a href="#lightbox-4">515</a></div>
  <div><img src="https://picsum.photos/600/600/?image=516"/><a href="#lightbox-5">516</a></div>
  <div><img src="https://picsum.photos/600/600/?image=517"/><a href="#lightbox-6">517</a></div>
  <div><img src="https://picsum.photos/600/600/?image=518"/><a href="#lightbox-7">518</a></div>
  <div><img src="https://picsum.photos/600/600/?image=519"/><a href="#lightbox-8">519</a></div>
  <div><img src="https://picsum.photos/600/600/?image=520"/><a href="#lightbox-9">520</a></div>
  <div><img src="https://picsum.photos/600/600/?image=521"/><a href="#lightbox-10">521</a></div>
  <div><img src="https://picsum.photos/600/600/?image=522"/><a href="#lightbox-11">522</a></div>
  <div><img src="https://picsum.photos/600/600/?image=523"/><a href="#lightbox-12">523</a></div>
  <div><img src="https://picsum.photos/600/600/?image=524"/><a href="#lightbox-13">524</a></div>
  <div><img src="https://picsum.photos/600/600/?image=525"/><a href="#lightbox-14">525</a></div>
  <div><img src="https://picsum.photos/600/600/?image=526"/><a href="#lightbox-15">526</a></div>
  <div><img src="https://picsum.photos/600/600/?image=527"/><a href="#lightbox-16">527</a></div>
  <div><img src="https://picsum.photos/600/600/?image=528"/><a href="#lightbox-17">528</a></div>
  <div><img src="https://picsum.photos/600/600/?image=529"/><a href="#lightbox-18">529</a></div>
</div>
<div class="lightbox" id="lightbox-1">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=512"/>
    <div class="title">No. <b>512</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-2">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=513"/>
    <div class="title">No. <b>513</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-3">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=514"/>
    <div class="title">No. <b>514</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-4">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=515"/>
    <div class="title">No. <b>515</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-5">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=516"/>
    <div class="title">No. <b>516</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-6">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=517"/>
    <div class="title">No. <b>517</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-7">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=518"/>
    <div class="title">No. <b>518</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-8">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=519"/>
    <div class="title">No. <b>519</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-9">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=520"/>
    <div class="title">No. <b>520</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-10">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=521"/>
    <div class="title">No. <b>521</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-11">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=522"/>
    <div class="title">No. <b>522</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-12">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=523"/>
    <div class="title">No. <b>523</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-13">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=524"/>
    <div class="title">No. <b>524</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-14">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=525"/>
    <div class="title">No. <b>525</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-15">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=526"/>
    <div class="title">No. <b>526</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-16">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=527"/>
    <div class="title">No. <b>527</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-17">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=528"/>
    <div class="title">No. <b>528</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>
<div class="lightbox" id="lightbox-18">
  <div class="content"><img src="https://picsum.photos/1920/1080/?image=529"/>
    <div class="title">No. <b>529</b> from Picsum</div><a class="close" href="#gallery"></a>
  </div>
</div>

{/* //                     <div id="gallery">
//                     <img src= {family2}></img>
//                     <img src= {family2}></img>
//                     <img src= {family2}></img>
//                     </div> */}

                </div>
                {/* <div className="grid-6">
                <MessageList
                messagess={user.messagess}
                title={`${user.username}'s thoughts...`}
                />
                {!userParam && <MessageForm />}
                </div> */}
                <div className="grid-7">

                </div>
            </div>
        </div>



    );
};

export default Profile;



