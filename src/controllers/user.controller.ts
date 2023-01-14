import { User, IUser } from '../models/user.model';
import { Request, Response, NextFunction } from 'express';


exports.signUp = async (req: Request, res: Response) => {
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
    return res.status(500).json({
        message: 'Error saving user',
        error: error,
    });
 }
}

exports.findUser = async (req: Request, res: Response) => {
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