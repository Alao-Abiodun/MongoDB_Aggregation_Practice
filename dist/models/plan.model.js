"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
const mongoose_1 = require("mongoose");
const planSchema = new mongoose_1.Schema({
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
exports.Plan = (0, mongoose_1.model)('Plan', planSchema);
//# sourceMappingURL=plan.model.js.map