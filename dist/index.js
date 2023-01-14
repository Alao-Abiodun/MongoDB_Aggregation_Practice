"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./connection"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (_, res) => {
    res.status(200).send();
});
app.listen(port, () => {
    (0, connection_1.default)();
    console.log(`Running on port ${port}`);
});
//# sourceMappingURL=index.js.map