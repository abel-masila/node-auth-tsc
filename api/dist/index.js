"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/", (req, res) => res.json({ message: "OK" }));
app.listen(3000, () => console.log(`http:localhost:${3000}`));
//# sourceMappingURL=index.js.map