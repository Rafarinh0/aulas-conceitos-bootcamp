import React, { useState } from 'react';

import Header from './components/Header';
import './App.css';
import backgroundImg from './assets/background.jpg';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end Web']);

    function handleAddProjects() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        <div>
            <Header title="Projects" />

            <img src={backgroundImg} width={300}/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProjects}>Adicionar Projeto</button>
        </div>
    )
}

export default App;