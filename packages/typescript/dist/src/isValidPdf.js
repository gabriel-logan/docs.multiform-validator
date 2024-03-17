"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function isValidPdf(filePath) {
    var buffer = Buffer.alloc(4);
    var fd = fs_1.default.openSync(filePath, 'r');
    fs_1.default.readSync(fd, buffer, 0, 4, 0);
    fs_1.default.closeSync(fd);
    var isPdf = buffer[0] === 0x25 && buffer[1] === 0x50 && buffer[2] === 0x44 && buffer[3] === 0x46;
    return isPdf;
}
exports.default = isValidPdf;
