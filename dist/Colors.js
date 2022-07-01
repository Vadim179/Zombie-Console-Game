"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
const ansi_styles_1 = __importDefault(require("ansi-styles"));
class Colors {
    static hex(color) {
        return (text) => ansi_styles_1.default.color.ansi16m(...ansi_styles_1.default.hexToRgb(color)) +
            text +
            ansi_styles_1.default.color.close;
    }
    static rgb(r, g, b) {
        return (text) => ansi_styles_1.default.color.ansi(ansi_styles_1.default.rgbToAnsi(r, g, b)) +
            text +
            ansi_styles_1.default.color.close;
    }
}
exports.Colors = Colors;
//# sourceMappingURL=Colors.js.map