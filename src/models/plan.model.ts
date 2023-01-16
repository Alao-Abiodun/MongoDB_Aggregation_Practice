import { Schema, model } from 'mongoose';

export interface IPlan extends Document {
    name: string;
    price: string;
    storage: number;
    support: boolean;
    upgrades: number;
}

const planSchema = new Schema<IPlan>({
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
        type: Boolean
    },
    upgrades: {
        type: Number,
    }
});

export const Plan = model<IPlan>('Plan', planSchema);
