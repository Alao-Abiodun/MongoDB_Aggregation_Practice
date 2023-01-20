import { User, IUser } from '../models/user.model';
import { Request, Response, NextFunction } from 'express';
import { Plan } from '../models/plan.model';


const signUp = async (req: Request, res: Response) => {
 try {
    const { name, email, age, state } = req.body;
    const user = new User();
    user.name = name;
    user.email = email;
    user.age = age;
    user.state = state;

    await user.save();

    return res.status(201).json({
        message: 'User saved successfully',
        data: user
    })
 } catch (error) {
    console.log(error);
    return res.status(500).json({
        message: 'Error saving user',
        error: error,
    });
 }
}

const fetchUsersByAge = async (req: Request, res: Response) => {
    try {
        const result = await User.aggregate([
            {
                $match: {
                    age: { $gt: 10 },
                }
            }
        ])

        return res.status(200).json({
            message: 'User age greater than 10',
            data: result,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error saving user',
            error: error,
        });
    }
}

const fetchUsers = async (req: Request, res: Response) => {
    try {
        const result = await User.aggregate([
            {
                $group: {
                    _id: {
                        age: '$age',
                    }
                }
            }
        ])
        return res.status(200).json({
            message: 'Distinct value of user age',
            data: result,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error saving user',
            error: error,
        });
    }
}

const sortUserByAge = async (req: Request, res: Response) => {
    try {
        const result = await User.aggregate([
            {
                $sort: {
                        age: 1
                       }
            }
        ])
        return res.status(200).json({
            message: 'User sorted by age',
            data: result,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error saving user',
            error: error,
        });
    }
}

const choosePlan = async (req: Request, res: Response) => {
    try {
        const { user_type, plan_type } = req.body;

        // check if plan is available
        const plan = await Plan.findOne({ _id: plan_type });

        if (!plan) {
            return res.status(404).json({
                message: 'Plan not found',
            })
        }
            
        // find user
        const user = await User.findOne({ _id: user_type });

        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            })
        }

        await Promise.all([
            user.plan = plan_type,

            user.save()
        ]);

        return res.status(200).json({
            message: 'User added a plan successfully',
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error saving user',
            error: error,
        });
    }
}

const selectUserAge = async (req: Request, res: Response) => {
    try {
       const result = await User.aggregate([
            {
                // project the age field
                $project: {
                    age: 1
                },
            }, 
            {
                // using unwind
                $unwind: '$name'
            }
        ])

        return res.status(200).json({
            message: 'User age selected',
            data: result,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error saving user',
            error: error,
        });
    }
}



export { signUp, fetchUsersByAge, fetchUsers, sortUserByAge, choosePlan, selectUserAge } 