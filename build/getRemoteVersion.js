"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const https_1 = tslib_1.__importDefault(require("https"));
/**
 * @param thisVersion - SEMVER to check against
 * @param jsonUrl - eg: 'https://raw.githubusercontent.com/johndcarmichael/npm-tool-version-check/master/package.json'
 */
exports.default = (thisVersion, jsonUrl) => {
    console.log('Checking version from: ' + jsonUrl);
    return new Promise((resolve, reject) => {
        https_1.default.get(jsonUrl, (res) => {
            let a = '';
            res.on('data', (d) => {
                a += d.toString();
            });
            res.on('close', () => {
                resolve((JSON.parse(a)).version);
            });
        }).on('error', (e) => {
            return reject(e);
        });
    });
};
