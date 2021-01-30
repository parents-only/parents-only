import React, { useState } from 'react';

const wrapContext = React.createContext()

const ContextProvider = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <wrapContext.Provider value={{
            state: {
                showModal
            },
            handlers: {
                setShowModal
            }
        }}>
            {props.children}
        </wrapContext.Provider>
    )
}

export {wrapContext, ContextProvider}