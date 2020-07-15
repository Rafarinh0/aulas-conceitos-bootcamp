import React, { useState, useEffect} from 'react';
import api from './services/api';

import Header from './components/Header';
import './App.css';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, [])
    //pegando o conceito da useEffect, sempre quando o componente for atualizado, a useEffect vai disparar a função 
    //contida nela e vai retornar os dados da requisição, ou seja, o título e owner dos projetos,
    // que serão aproveitados depois no JSX.
    async function handleAddProjects() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);

        //fazendo a request à API
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Rafael Marinho"
        });

        const project = response.data;//assimilando a response a uma variável

        setProjects([...projects, project]);//jogar essa variável no array de projetos de maneira indireta
    }
//esse map pra cada projeto retorna uma li com o titulo do projeto
    return (
        <div>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
            <button type="button" onClick={handleAddProjects}>Adicionar Projeto</button>
        </div>
    )
}

export default App;