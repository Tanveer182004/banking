"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var BankCard = function (_a) {
    var account = _a.account, userName = _a.userName, _b = _a.showBalance, showBalance = _b === void 0 ? true : _b;
    return (react_1["default"].createElement("div", { className: "flex flex-col" },
        react_1["default"].createElement(link_1["default"], { href: "/", className: "bank-card" },
            react_1["default"].createElement("div", { className: "bank-card_content" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h1", { className: "text-16 font-semibold text-white" }, account.name || userName),
                    react_1["default"].createElement("p", { className: "font-ibm-plex-serif font-black text-white" }, utils_1.formatAmount(account.currentBalance))),
                react_1["default"].createElement("article", { className: "flex flex-col gap-2" },
                    react_1["default"].createElement("div", { className: "flex justify-between" },
                        react_1["default"].createElement("h1", { className: "text-12 font-semibold text-white" }, userName),
                        react_1["default"].createElement("h2", { className: "text-12 font-semibold text-white" }, "\u25CF\u25CF / \u25CF\u25CF")),
                    react_1["default"].createElement("p", { className: "text-14 font-semibold tracking-[1.1px] text-white" },
                        "\u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF ",
                        react_1["default"].createElement("span", { className: "text-16" }, "1234")))),
            react_1["default"].createElement("div", { className: "bank-card_icon" },
                react_1["default"].createElement(image_1["default"], { src: "/icons/Paypass.svg", width: 20, height: 24, alt: "pay" }),
                react_1["default"].createElement(image_1["default"], { src: "/icons/mastercard.svg", width: 45, height: 32, alt: "mastercard", className: "ml-5" })),
            react_1["default"].createElement(image_1["default"], { src: "/icons/lines.png", width: 316, height: 190, alt: "lines", className: "absolute top-0 left-0 " }))));
};
exports["default"] = BankCard;
