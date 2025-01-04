import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation for the `children` prop
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children prop is provided and is of type React node
};

export default AuthProvider;
