"use strict";
// creating a function with type
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addStr = void 0;
function addNum(a, b) {
    return a + b;
}
exports["default"] = addNum;
var addStr = function (a, b) {
    if (b === void 0) { b = "b"; }
    return "".concat(a, " ").concat(b);
};
exports.addStr = addStr;
//defining union ==>
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
var printFormat = function (title, param) {
    return console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
var fetchData = function (url) { return Promise.resolve("Data from ".concat(url)); };
exports.fetchData = fetchData;
// if there's an issue where my promise is telling me undefined, go to tsconfig, then target and change to esnext
// using for spread operators
function introduction(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
//misconception on TypeScript
//Ts only enforces types at compile time not runtime sample below
var getName = function (user) { var _a, _b; return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last"); };
exports.getName = getName;
