'use client';
"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var utils_1 = require("@/lib/utils");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var Sidebar = function (_a) {
    var user = _a.user;
    var pathname = navigation_1.usePathname();
    return (React.createElement("section", { className: "sidebar" },
        React.createElement("nav", { className: "flex flex-col gap-4" },
            React.createElement(link_1["default"], { href: "/", className: "mb-12 cursor-pointer items-center gap-4 flex" },
                React.createElement(image_1["default"], { src: "/icons/logo.svg", width: 34, height: 34, alt: "Horizon Logo", className: "size-[27px] max-xl:size-14" }),
                React.createElement("h1", { className: "sidebar-logo" }, "Horizon")),
            constants_1.sidebarLinks.map(function (item) {
                var isActive = pathname === item.route || pathname.startsWith(item.route + "/");
                return (React.createElement(link_1["default"], { href: item.route, key: item.label, className: utils_1.cn('sidebar-link', { 'bg-bank-gradient': isActive }) },
                    React.createElement("div", { className: "relative size-7" },
                        React.createElement(image_1["default"], { src: item.imgURL, alt: item.label, fill: true, className: utils_1.cn({
                                'brightness-[3] invert-0': isActive
                            }) })),
                    React.createElement("p", { className: utils_1.cn('sidebar-label', { '!text-white': isActive }) }, item.label)));
            }),
            "USER"),
        "FOOTER"));
};
exports["default"] = Sidebar;
