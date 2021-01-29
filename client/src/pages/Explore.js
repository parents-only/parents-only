import React, { useState } from 'react';
import Switch from 'react-ios-switch';
// import ViewMembersPage from '../components/ViewMembersPage/index';
import Advanced from '../components/SwitchCard/examples/Advanced';
import Simple from '../components/SwitchCard/examples/Simple'
import './explore.css';


const Explore = () => {
    const [showAdvanced, setShowAdvanced] = useState(true);

    return (

        <div className="body">
            {showAdvanced ? <Advanced /> : <Simple />}
            <div className='row'>
                <p style={{ color: '#fff' }}>Show advanced example</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
            </div>
        </div>
        // <main>
        // {/* <div className="flex-row justify-space-between">
        //     <ViewMembersPage />
        // </div> */}
        // </main>
    )
}

export default Explore;