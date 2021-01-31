"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var e = __importStar(require("express"));
var fs = __importStar(require("fs"));
var route = e.Router();
exports.router = {
    requestHtml: function () {
        return route.get("/*", function (req, res) {
            console.log('path:', req.path);
            console.log('url:', req.url);
            console.log('base:', req.baseUrl);
            console.log('original:', req.originalUrl);
            var url = req.originalUrl;
            if (url === '/') {
                url = 'main';
            }
            fs.readFile('myProject/view/' + url + '.html', { encoding: 'utf-8' }, function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data);
            });
        });
    },
    requestApi: [
        route.get("/", function (req, res) {
            console.log(req.baseUrl);
        }),
        route.get("/test.api", function (req, res) {
            console.log(req.baseUrl);
        }),
        route.post("/", function () {
        }),
    ]
};
