import { Router } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/lesson';

const lessonRouter = Router();

lessonRouter.post('/', async (req, res) => {
    try {
        const repo = getRepository(Lesson);
        const result = await repo.save(req.body);

        return res.status(201).json(result);
    } catch (error) {
        console.log('err.message', error.message);
        return res.status(400).send();
    }
});

lessonRouter.get('/', async (req, res) => {
    try {
        const repo = getRepository(Lesson);
        const result = await repo.find();

        return res.status(200).json(result);
    } catch (error) {
        console.log('err.message', error.message);
        return res.status(400).send();
    }
});

lessonRouter.get('/:id', async (req, res) => {
    try {
        const repo = getRepository(Lesson);
        const result = await repo.find({ where: { id: req.params.id } });

        return res.status(200).json(result);
    } catch (error) {
        console.log('err.message', error.message);
        return res.status(400).send();
    }
});

export default lessonRouter;
