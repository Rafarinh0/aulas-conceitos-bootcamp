import React from 'react';

import Header from './components/Header';

function App() {
    return (
        <div>
            <Header title="Home Page">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>
        </div>
    )
}

export default App;