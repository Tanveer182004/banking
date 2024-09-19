'use client';
"use strict";
exports.__esModule = true;
var react_countup_1 = require("react-countup");
var AnimatedCounter = function (_a) {
    var amount = _a.amount;
    return (React.createElement("div", null,
        React.createElement(react_countup_1["default"], { decimals: 2, decimal: ".", prefix: "\u20B9", end: amount })));
};
exports["default"] = AnimatedCounter;
