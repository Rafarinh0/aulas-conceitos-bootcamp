import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'rafael@email.com',
        password: '1234abc',
        techs: ['Node.js', 'React.js', {
            title: 'Javascript',
            experience: 37,
        }]
    });

    //console.log(user.)

    return response.json({message: 'Hello World'})
}