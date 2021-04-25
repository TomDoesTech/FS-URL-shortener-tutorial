"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("config"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = __importDefault(require("./routes"));
var db_1 = __importDefault(require("./db"));
var app = express_1.default();
var port = config_1.default.get("port");
// parse application/json
app.use(body_parser_1.default.json());
app.listen(port, function () {
    console.log("Application listening at http://localhost:" + port);
    db_1.default();
    routes_1.default(app);
});
