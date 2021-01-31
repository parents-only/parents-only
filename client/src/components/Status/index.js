import React, { Component } from 'react';


class Status extends Component {
    state = {
        userInput: ''
    }

    inputChangedHandler = (event) => {
        this.setState({ userInput: event.target.value });
    }

    inputPost = () => {
        return <div dangerouslySetInnerHTML={this.state.userInput} />;
    }

    render() {
        return (

            <div class="grid-1">
                <div class="grid-1">
                    <p id="status">{this.state.userInput}</p>
                </div>
                <br></br>
                <br></br>
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
                        <div class="row px-3 form-group"> <textarea class="text-muted bg-light mt-4 mb-3" placeholder="Hi AJ, what's on your mind today?" onChange={this.inputChangedHandler} value={this.state.userInput}></textarea> </div>
                        <div class="row px-3">
                            <p class="fa fa-user options mb-0 mr-4"></p>
                            <p class="fa fa-map-marker options mb-0 mr-4"></p>
                            <p class="fa fa-image options mb-0 mr-4"></p> <img class="options" src="https://img.icons8.com/material/24/000000/more--v2.png" width="30px" height="28px" />
                            <div class="btn btn-dark ml-auto" id="post" onClick={this.inputPost}>Post</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Status;