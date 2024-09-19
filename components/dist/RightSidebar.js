"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var BankCard_1 = require("./BankCard");
var RightSidebar = function (_a) {
    var user = _a.user, transactions = _a.transactions, banks = _a.banks;
    return (react_1["default"].createElement("aside", { className: "right-sidebar" },
        react_1["default"].createElement("section", { className: "flex flex-col pb-8" },
            react_1["default"].createElement("div", { className: "profile-banner" }),
            react_1["default"].createElement("div", { className: "profile" },
                react_1["default"].createElement("div", { className: "profile-img" },
                    react_1["default"].createElement("span", { className: "text-5xl font-bold text-blue-500" }, user.firstName[0])),
                react_1["default"].createElement("div", { className: "profile-details" },
                    react_1["default"].createElement("h1", { className: "profile-name" },
                        user.firstName,
                        " ",
                        user.lastName),
                    react_1["default"].createElement("p", { className: "profile-emil" }, user.email)))),
        react_1["default"].createElement("section", { className: "banks" },
            react_1["default"].createElement("div", { className: "flex w-full justify-between" },
                react_1["default"].createElement("h2", { className: "header-2" }, "My Banks"),
                react_1["default"].createElement(link_1["default"], { href: "/", className: "flex gap-2" },
                    react_1["default"].createElement(image_1["default"], { src: "/icons/plus.svg", width: 20, height: 20, alt: "plus" }),
                    react_1["default"].createElement("h2", { className: "text-14 font-semibold text-gray-600" }, "Add Bank"))),
            (banks === null || banks === void 0 ? void 0 : banks.length) > 0 && (react_1["default"].createElement("div", { className: "relative flex flex-1 flex-col items-center justify-center gap-5" },
                react_1["default"].createElement("div", { className: "relative z-10" },
                    react_1["default"].createElement(BankCard_1["default"], { key: banks[0].$id, account: banks[0], userName: user.firstName + " " + user.lastName, showBalance: false })),
                banks[1] && (react_1["default"].createElement("div", { className: "absolute right-0 top-8 z-0 w-[90%]" },
                    react_1["default"].createElement(BankCard_1["default"], { key: banks[1].$id, account: banks[1], userName: user.firstName + " " + user.lastName, showBalance: false }))))))));
};
exports["default"] = RightSidebar;
