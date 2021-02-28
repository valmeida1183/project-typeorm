import { Router } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';
import Student from '../models/student';

const studentRouter = Router();

studentRouter.post('/', async (req, res) => {
    try {
        const repo = getRepository(Student);
        const { name, email, key } = req.body;
        const student = repo.create({
            name,
            key,
            email,
        });

        const errors = await validate(student);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        const result = await repo.save(student);
        return res.status(201).json(result);
    } catch (error) {
        console.log('err.message', error.message);
        return res.status(400).send();
    }
});

studentRouter.get('/', async (req, res) => {
    try {
        const repo = getRepository(Student);
        const result = await repo.find();

        return res.status(200).json(result);
    } catch (error) {
        console.log('err.message', error.message);
        return res.status(400).send();
    }
});

studentRouter.get('/:id', async (req, res) => {
    try {
        const repo = getRepository(Student);
        const result = await repo.findOne({ where: { id: req.params.id } });

        return res.status(200).json(result);
    } catch (error) {
        console.log('err.message', error.message);
        return res.status(400).send();
    }
});

export default studentRouter;
