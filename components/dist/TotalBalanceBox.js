"use strict";
exports.__esModule = true;
var AnimatedCounter_1 = require("./AnimatedCounter");
var DoughnutChart_1 = require("./DoughnutChart");
var TotalBalanceBox = function (_a) {
    var _b = _a.accounts, accounts = _b === void 0 ? [] : _b, totalBanks = _a.totalBanks, totalCurrentBalance = _a.totalCurrentBalance;
    return (React.createElement("section", { className: "total-balance" },
        React.createElement("div", { className: "total-balance-chart" },
            React.createElement(DoughnutChart_1["default"], { accounts: accounts })),
        React.createElement("div", { className: "flex flex-col gap-6" },
            React.createElement("h2", { className: "header-2" },
                "Bank Accounts: ",
                totalBanks),
            React.createElement("div", { className: "flex flex-col gap-2" },
                React.createElement("p", { className: "total-balance-label" }, "Total Current Balance"),
                React.createElement("div", { className: "total-balance-amount flex-center gap-2" },
                    React.createElement(AnimatedCounter_1["default"], { amount: totalCurrentBalance }))))));
};
exports["default"] = TotalBalanceBox;
