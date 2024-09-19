"use strict";
exports.__esModule = true;
var HeaderBox = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "title" : _b, title = _a.title, subtext = _a.subtext, user = _a.user;
    return (React.createElement("div", { className: "header-box" },
        React.createElement("h1", { className: "header-box-title" },
            title,
            type === 'greeting' && (React.createElement("span", { className: "text-bankGradient" },
                "\u00A0",
                user))),
        React.createElement("p", { className: "header-box-subtext" }, subtext)));
};
exports["default"] = HeaderBox;
