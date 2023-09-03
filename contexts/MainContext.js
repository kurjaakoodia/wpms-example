import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MainContext = React.createContext({});

const MainProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn, isRegisteredIn] = useState(false);
  const [user, setUser] = useState({});

  return (
    <MainContext.Provider
      value={{isLoggedIn, setIsLoggedIn, user, setUser, isRegisteredIn}}
    >
      {props.children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node,
};

export {MainContext, MainProvider};
