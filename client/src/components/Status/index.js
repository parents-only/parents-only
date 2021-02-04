import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_MESSAGE } from '../../utils/mutations';
import { QUERY_MESSAGES, QUERY_ME, QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Avatar } from '@material-ui/core';


const Status = () => {
    const [ input, setInput ] = useState('');
    

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');

    }

    
        return (

            <div>
                <div className="grid-2">
                    <div className="statusCard">
                        <div className="row px-3"> 
                            <Avatar 
                                src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <div className="flex-column">
                                <h3 className="mb-0 font-weight-normal">Aj Stribling</h3> 
                                <select name="privacy" className="privacy">
                                    <option>Public status</option>
                                    <option>Private status</option>
                                </select>
                            </div>
                        </div>
                        <div className="row px-3 form-group"> 
                            <textarea 
                                className="text-muted bg-light mt-4 mb-3" 
                                placeholder="Hi AJ, what's on your mind today?" 
                                onChange={e => setInput(e.target.value)} 
                                value={input}></textarea> 
                        </div>
                        <div className="row px-3">
                            <p className="fa fa-user options mb-0 mr-4"></p>
                            <p className="fa fa-map-marker options mb-0 mr-4"></p>
                            <p className="fa fa-image options mb-0 mr-4"></p> 
                                <img 
                                    className="options" 
                                    src="https://img.icons8.com/material/24/000000/more--v2.png" 
                                    width="30px" 
                                    height="28px" 
                                />
                            <div className="btn btn-dark ml-auto" id="post" 
                                onClick={handleSubmit}>
                                    Post
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

export default Status;