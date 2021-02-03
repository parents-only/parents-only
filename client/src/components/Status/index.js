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

            <div className="grid-1">
                <div className="grid-1">
                    <p id="status">{this.state.userInput}</p>
                </div>
                <br></br>
                <br></br>
                <div className="grid-2">
                    <div className="statusCard">
                        <div className="row px-3"> <img className="profile-pic mr-3" src="https://via.placeholder.com/150" />
                            <div className="flex-column">
                                <h3 className="mb-0 font-weight-normal">AJ Stribling</h3> <select name="privacy" className="privacy">
                                    <option>Public status</option>
                                    <option>Private status</option>
                                </select>
                            </div>
                        </div>
                        <div className="row px-3 form-group"> <textarea className="text-muted bg-light mt-4 mb-3" placeholder="Hi AJ, what's on your mind today?" onChange={this.inputChangedHandler} value={this.state.userInput}></textarea> </div>
                        <div className="row px-3">
                            <p className="fa fa-user options mb-0 mr-4"></p>
                            <p className="fa fa-map-marker options mb-0 mr-4"></p>
                            <p className="fa fa-image options mb-0 mr-4"></p> <img className="options" src="https://img.icons8.com/material/24/000000/more--v2.png" width="30px" height="28px" />
                            <div className="btn btn-dark ml-auto" id="post" onClick={this.inputPost}>Post</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Status;