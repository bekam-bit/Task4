import React, { useState } from 'react'
import { useUserAuth } from './UserAuth'

const Log = () => {
    const { isAuthenticated, toggleAuth, user, setUser } = useUserAuth();
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {  // Only proceed if name is not empty
            setUser(name); // Update the user
            if (!isAuthenticated) {
                toggleAuth(); // If not authenticated, log in
            }
        }
    }
    //
    const handleLogout = () => {
        setUser('');
        setName('');
        toggleAuth();
    };

    const isLoggedIn = isAuthenticated && (user || name);  // Check if user is logged in
    const handleStyle = isAuthenticated ? 'authenticated' : 'unauthenticated';// Set the style based on authentication

    return (
        <>
            {!isLoggedIn ? (
                <form onSubmit={handleSubmit} className={`app-container ${handleStyle}`}>
                    <label>
                        <input
                            type="text"
                            value={name || user || ''}
                            onChange={handleNameChange}
                            placeholder="Enter your name"
                        />
                    </label>
                    <h1>Please login</h1>
                    <button type="submit">Login</button>
                </form>
            ) : (
                <div className={`app-container ${handleStyle}`}>
                    <h1>Welcome, {user || name}!</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </>
    );
};
export default Log;