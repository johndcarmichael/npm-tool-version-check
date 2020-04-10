"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (milliseconds) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), milliseconds);
    });
};
