import { Schema, model } from 'mongoose';

const planSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    storage: {
        type: Number,
    },
    support: {
        type: Number
    },
    upgrades: {
        type: Number,
    }
});

export const Plan = model('Plan', planSchema);
