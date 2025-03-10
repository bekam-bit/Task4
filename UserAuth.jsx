import React, { createContext, useState, useContext } from 'react';

const UserAuthContext = createContext();

export function UserAuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState('');

    const toggleAuth = () => {
        if (isAuthenticated) {
            // If logging out, reset both authentication and user state
            setIsAuthenticated(false);
            setUser('');
        } else {
            // If logging in, only update authentication state
            setIsAuthenticated(true);
        }
    };

    const value = { isAuthenticated, toggleAuth, user, setUser };

    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}
export function useUserAuth() {
    const context = useContext(UserAuthContext);
    return context
}