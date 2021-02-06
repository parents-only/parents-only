import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      chatOpen: false,
      status: {},
      friends: [],
      messages: [],
      currentUser: {}
    });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };

const useStoreContext = () => {
    return useContext(StoreContext);
  };
  
  export { StoreProvider, useStoreContext };