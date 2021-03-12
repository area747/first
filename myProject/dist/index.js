"use strict";
// You need to import the default export from express instead of the namespace (which is an object with all named exports)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apiRouter_1 = __importDefault(require("./apiRouter"));
var htmlRouter_1 = __importDefault(require("./htmlRouter"));
var app = express_1.default();
// 정적 파일추가
app.use(express_1.default.static('myProject/view'));
// api 라우터
app.use('/api', apiRouter_1.default);
// view url 라우터
app.use('/', htmlRouter_1.default);
// 에러처리 핸들러
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(404).send('404 Not Found!!!');
});
app.listen(7000, 'localhost');
//# sourceMappingURL=index.js.map