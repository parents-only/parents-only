import React from 'react';
import './index.css';
import FriendList from '../FriendList'
import Status from '../Status'
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Redirect, useParams } from "react-router-dom";
// This component, Redirect, will allow us to redirect the user to another route within the application. Think of it like how we've used location.replace() in the past, but it leverages React Router's ability to not reload the browser!
import { ADD_FRIEND } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/react-hooks';

const Profile = () => {
    const { data: userData } = useQuery(QUERY_ME);

    const loggedIn = Auth.loggedIn();

  
    return (
        <div>
            
            <div id="mainProfile">
                <div id="topHalf">
                    <img src={"http://www.boostnet.in/wp-content/uploads/2016/10/Header-1.png"} alt="" />
                </div>
                <div id="bottomHalf">
                    <img src="BabyAJ.JPG" alt="" style={{ height: 150, width: 150 }} />
                </div>
            </div>
            <div className="wrapper" id="status">
                    <Status />
            

            {loggedIn && userData ? (
                <div className="grid-3">
                    <h4>Friends</h4>
                        <FriendList
                            username={userData.me.username}
                            friendCount={userData.me.friendCount}
                            friends={userData.me.friends}                        
                        /> 
                </div>
                ) : null}

                {loggedIn && userData ? (
                <div className="grid-4">
                    
                    
                    <h4>About me</h4>
                    <p>Age: </p>
                    <p>Location: </p>
                    <p>Bio: </p>         
                </div>
                ) : null}
            )
            
                <div className="grid-5">
                    <h4>Photos</h4>
                    <div id="gallery">
                        <div><img src="https://picsum.photos/600/600/?image=512" /><a href="#lightbox-1">512</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=513" /><a href="#lightbox-2">513</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=514" /><a href="#lightbox-3">514</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=515" /><a href="#lightbox-4">515</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=516" /><a href="#lightbox-5">516</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=517" /><a href="#lightbox-6">517</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=518" /><a href="#lightbox-7">518</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=519" /><a href="#lightbox-8">519</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=520" /><a href="#lightbox-9">520</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=521" /><a href="#lightbox-10">521</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=522" /><a href="#lightbox-11">522</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=523" /><a href="#lightbox-12">523</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=524" /><a href="#lightbox-13">524</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=525" /><a href="#lightbox-14">525</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=526" /><a href="#lightbox-15">526</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=527" /><a href="#lightbox-16">527</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=528" /><a href="#lightbox-17">528</a></div>
                        <div><img src="https://picsum.photos/600/600/?image=529" /><a href="#lightbox-18">529</a></div>
                    </div>
                    <div className="lightbox" id="lightbox-1">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=512" />
                            <div className="title">No. <b>512</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-2">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=513" />
                            <div className="title">No. <b>513</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-3">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=514" />
                            <div className="title">No. <b>514</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-4">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=515" />
                            <div className="title">No. <b>515</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-5">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=516" />
                            <div className="title">No. <b>516</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-6">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=517" />
                            <div className="title">No. <b>517</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-7">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=518" />
                            <div className="title">No. <b>518</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-8">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=519" />
                            <div className="title">No. <b>519</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-9">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=520" />
                            <div className="title">No. <b>520</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-10">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=521" />
                            <div className="title">No. <b>521</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-11">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=522" />
                            <div className="title">No. <b>522</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-12">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=523" />
                            <div className="title">No. <b>523</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-13">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=524" />
                            <div className="title">No. <b>524</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-14">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=525" />
                            <div className="title">No. <b>525</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-15">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=526" />
                            <div className="title">No. <b>526</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-16">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=527" />
                            <div className="title">No. <b>527</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-17">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=528" />
                            <div className="title">No. <b>528</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div className="lightbox" id="lightbox-18">
                        <div className="content"><img src="https://picsum.photos/1920/1080/?image=529" />
                            <div className="title">No. <b>529</b> from Picsum</div><a className="close" href="#gallery"></a>
                        </div>
                    </div>
                </div>
                <div className="grid-6">
                    <h4>Recommended<br>
                    </br>Parents</h4>
                </div>
                <div className="grid-6"></div>
            </div>
            </div>
       
        

    );
};

export default Profile;



