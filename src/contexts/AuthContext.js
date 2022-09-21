import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { auth } from "../firebase";

//  Creating context
const AuthContext = React.createContext();

// Creating a function to grab later on using context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

    // Grabbing user from firebase authentification and setting it
    // Using react-router-dom to push our application to chats
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if(user) history.push('/chats');
        })
    }, [user, history])

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}