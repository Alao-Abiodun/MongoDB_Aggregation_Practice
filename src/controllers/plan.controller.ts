import { Plan, IPlan } from '../models/plan.model';
import { Request, Response, NextFunction } from 'express';
import { request } from 'http';

const createPlan = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, price, storage, support, upgrades } = req.body;

        const plan = new Plan();
        plan.name = name;
        plan.price = price;
        plan.storage = storage;
        plan.support = support;
        plan.upgrades = upgrades;

        await plan.save();

        return res.status(201).json({
            message: 'Plan created successfully',
            data: plan
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error creating plan',
            error: error,
        });
    }
}

export { createPlan };