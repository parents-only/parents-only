import React from 'react';
import Simple from '../components/SwitchCard/examples/Simple';
import Advanced from '../components/SwitchCard/examples/Advanced';
import './explore.css';


const Explore = () => {

    return (

        <div className="body">
            <Simple />
            <Advanced />
        </div>
        // <main>
        // {/* <div className="flex-row justify-space-between">
        //     <ViewMembersPage />
        // </div> */}
        // </main>
    )
}

export default Explore;