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
var apiRouter = e.Router();
apiRouter.get('/*', function (req, res, next) {
    next('404');
});
apiRouter.get('/:serviceCode', function (req, res, next) {
    var params = req.params;
    console.log(params.serviceCode);
    next(new Error('woops'));
});
apiRouter.get('/', function (req, res, next) {
    var url = req.originalUrl;
    console.log('api origin', url);
});
module.exports = apiRouter;
//# sourceMappingURL=apiRouter.js.map