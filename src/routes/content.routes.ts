import { Router } from 'express';
import { getRepository } from 'typeorm';
import Content from '../models/content';

const contentRouter = Router();

contentRouter.post('/', async (req, res) => {
    try {
        const repo = getRepository(Content);
        const result = await repo.save(req.body);

        return res.status(201).json(result);
    } catch (error) {
        console.log('err.message', error.message);
        return res.status(400).send();
    }
});

contentRouter.get('/', async (req, res) => {
    try {
        const repo = getRepository(Content);
        const result = await repo.find();

        return res.status(200).json(result);
    } catch (error) {
        console.log('err.message', error.message);
        return res.status(400).send();
    }
});

contentRouter.get('/:id', async (req, res) => {
    try {
        const repo = getRepository(Content);
        const result = await repo.findOne({ where: { id: req.params.id } });

        return res.status(200).json(result);
    } catch (error) {
        console.log('err.message', error.message);
        return res.status(400).send();
    }
});

export default contentRouter;
