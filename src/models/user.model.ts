import { Schema, model } from 'mongoose';

const userSchema = new Schema({
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

export const User = model('User', userSchema);
