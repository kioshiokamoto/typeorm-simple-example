import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express, { Request, Response } from 'express';

import { User } from './entity/User';

const app = express();
app.use(express.json());

//CREATE
app.post('/users', async (req: Request, res: Response) => {
    const {name, email, role} = req.body;
    try {
        const user = User.create({name, email, role});

        await user.save()

        return res.status(201).json(user)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
});
//READ
//UPDATE
//DELETE
//FIND

createConnection()
	.then(async () => {
		app.listen(5000, () => console.log('Server up at http://localhost:5000'));
	})
	.catch((error) => console.log(error));
