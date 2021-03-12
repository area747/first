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
var e = __importStar(require("express"));
var fs = __importStar(require("fs"));
var mvcRouter = e.Router();
mvcRouter.get('/:serviceCode', function (req, res, next) {
    var serviceCode = req.params.serviceCode || 'main';
    console.log('서비스코드 :', serviceCode);
    if (serviceCode === '404not') {
        next('404error!');
        return;
    }
    fs.readFile('myProject/view/' + serviceCode + '.html', { encoding: 'utf-8' }, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
});
mvcRouter.get('/', function (req, res, next) {
    console.log('mainpage');
    fs.readFile('myProject/view/main.html', { encoding: 'utf-8' }, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
});
module.exports = mvcRouter;
//# sourceMappingURL=htmlRouter.js.map