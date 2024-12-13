import { createContext, useState } from "react";

// Create a context with an initial value (null in this case)
const authContext = createContext({
  auth: -1, // Default value for auth
  email:'',
  setAuth: () => {},
  setEmail: () =>{} 
});

export const AuthProvider = ({ children }) => {
  // State to store authentication status
  const [auth, setAuth] = useState(null);
  const [email,setEmail]=useState(null)
  return (
    <authContext.Provider value={{ auth, setAuth ,email,setEmail}}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
