import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Class from '../models/class';
import ClassRepository from '../repositories/classRepository';

const classRouter = Router();

classRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Class);
    const result = await repo.save(req.body);

    return res.status(201).json(result);
  } catch (error) {
    console.log('err.message', error.message);
    return res.status(400);
  }
});

classRouter.get('/', async (req, res) => {
  try {
    const repo = getRepository(Class);
    const result = await repo.find();

    return res.status(200).json(result);
  } catch (error) {
    console.log('err.message', error.message);
    return res.status(400);
  }
});

classRouter.get('/:id', async (req, res) => {
  try {
    const repo = getRepository(Class);
    const result = await repo.findOne({ where: { id: req.params.id } });

    return res.status(200).json(result);
  } catch (error) {
    console.log('err.message', error.message);
    return res.status(400);
  }
});

classRouter.get('/name/:name', async (req, res) => {
  try {
    const repo = getCustomRepository(ClassRepository);
    const result = await repo.findByName(req.params.name);

    return res.status(200).json(result);
  } catch (error) {
    console.log('err.message', error.message);
    return res.status(400);
  }
});

export default classRouter;
