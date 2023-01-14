import { Schema, model } from 'mongoose';


export interface IUser extends Document {
    name: string;
    email: string;
    plan: Schema.Types.ObjectId;
    age: number;
    state: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String
    },
    email: {
        type: String
    },
    plan: {
        type: Schema.Types.ObjectId,
        ref: 'Plan',
    },
    age: {
        type: Number
    },
    state: {
        type: String
    }
});

export const User = model<IUser>('User', userSchema);
