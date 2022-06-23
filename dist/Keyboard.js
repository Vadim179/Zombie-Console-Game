"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboard = void 0;
const readline_1 = __importDefault(require("readline"));
readline_1.default.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}
const specialKeys = {
    escape: () => process.exit(),
};
class Keyboard {
    onKeyPress(callback) {
        process.stdin.on('keypress', (_, key) => {
            if (key.name in specialKeys)
                return specialKeys[key.name]();
            callback(key.name);
        });
    }
}
exports.Keyboard = Keyboard;
//# sourceMappingURL=Keyboard.js.map