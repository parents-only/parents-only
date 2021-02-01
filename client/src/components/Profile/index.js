import React from 'react';
import './index.css';
import FriendList from '../FriendList/index'
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import Gallery from 'react-photo-gallery';
import { photos, photos2 } from '../LandingPage/photos';


function Profile() {

    
    const { data: userData } = useQuery(QUERY_ME);
  
    const loggedIn = Auth.loggedIn();
  

    return (
        <div>
            <div id="mainProfile">
                <div id="topHalf">
                    <img src="http://www.boostnet.in/wp-content/uploads/2016/10/Header-1.png" alt="" />
                </div>
                <div id="bottomHalf">
                    <img src="https://via.placeholder.com/150" alt="" />
                </div>
            </div>
            <div class="wrapper" id="status">
                <div class="grid-1">
                    <p>This is my status. it is a very good status. if you don't like it then I don't like you. If you are still reading this then you clearly don't realize this isnt the finished product and is just a place hold. lol bye.</p>
                </div>
                <div class="grid-2">
                    <div class="statusCard">
                        <div class="row px-3"> <img class="profile-pic mr-3" src="https://via.placeholder.com/150" />
                            <div class="flex-column">
                                <h3 class="mb-0 font-weight-normal">AJ Stribling</h3> <select name="privacy" class="privacy">
                                    <option>Public status</option>
                                    <option>Private status</option>
                                </select>
                            </div>
                        </div>
                        <div class="row px-3 form-group"> <textarea class="text-muted bg-light mt-4 mb-3" placeholder="Hi AJ, what's on your mind today?"></textarea> </div>
                        <div class="row px-3">
                            <p class="fa fa-user options mb-0 mr-4"></p>
                            <p class="fa fa-map-marker options mb-0 mr-4"></p>
                            <p class="fa fa-image options mb-0 mr-4"></p> <img class="options" src="https://img.icons8.com/material/24/000000/more--v2.png" width="30px" height="28px" />
                            <div class="btn btn-dark ml-auto">Post</div>
                        </div>
                    </div>
                </div>
                {loggedIn && userData ? (
                <div class="grid-3">
                    <h4>Friends</h4>
                    <FriendList/>
                </div>
                ) : null}
                {loggedIn && userData ? (
                <div class="grid-4">
                    <h4>About me</h4>
                    <p>Age: {userData.age}</p>
                    <p>Location: {userData.location}</p>
                    <p>Bio: {userData.bio}</p>
                </div>
                ) : null}
                <div class="grid-5">
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
                    <div class="lightbox" id="lightbox-1">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=512" />
                            <div class="title">No. <b>512</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-2">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=513" />
                            <div class="title">No. <b>513</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-3">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=514" />
                            <div class="title">No. <b>514</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-4">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=515" />
                            <div class="title">No. <b>515</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-5">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=516" />
                            <div class="title">No. <b>516</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-6">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=517" />
                            <div class="title">No. <b>517</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-7">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=518" />
                            <div class="title">No. <b>518</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-8">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=519" />
                            <div class="title">No. <b>519</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-9">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=520" />
                            <div class="title">No. <b>520</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-10">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=521" />
                            <div class="title">No. <b>521</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-11">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=522" />
                            <div class="title">No. <b>522</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-12">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=523" />
                            <div class="title">No. <b>523</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-13">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=524" />
                            <div class="title">No. <b>524</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-14">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=525" />
                            <div class="title">No. <b>525</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-15">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=526" />
                            <div class="title">No. <b>526</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-16">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=527" />
                            <div class="title">No. <b>527</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-17">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=528" />
                            <div class="title">No. <b>528</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                    <div class="lightbox" id="lightbox-18">
                        <div class="content"><img src="https://picsum.photos/1920/1080/?image=529" />
                            <div class="title">No. <b>529</b> from Picsum</div><a class="close" href="#gallery"></a>
                        </div>
                    </div>
                </div>
                <div class="grid-6">
                    <h4>Recommended<br>
                    </br>Parents</h4>
                </div>
            </div>
        </div>

    );
}

export default Profile;



