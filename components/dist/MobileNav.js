'use client';
"use strict";
exports.__esModule = true;
var sheet_1 = require("@/components/ui/sheet");
var constants_1 = require("@/constants");
var utils_1 = require("@/lib/utils");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var MobileNav = function (_a) {
    var user = _a.user;
    var pathname = navigation_1.usePathname();
    return (React.createElement("section", { className: "w-full max-w-[264px]" },
        React.createElement(sheet_1.Sheet, null,
            React.createElement(sheet_1.SheetTrigger, null,
                React.createElement(image_1["default"], { src: "/icons/hamburger.svg", width: 30, height: 30, alt: "menu", className: "cursor-pointer" })),
            React.createElement(sheet_1.SheetContent, { side: "left", className: "border-none bg-white" },
                React.createElement(link_1["default"], { href: "/", className: "cursor-pointer items-center gap-1 px-4" },
                    React.createElement(image_1["default"], { src: "/icons/logo.svg", width: 34, height: 34, alt: "Horizon Logo" }),
                    React.createElement("h1", { className: "text-26 font-ibm-plex-serif font-bold text-black-1" }, "Horizon")),
                React.createElement("div", { className: "mobilenav-sheet" },
                    React.createElement(sheet_1.SheetClose, { asChild: true },
                        React.createElement("nav", { className: "flex h-full gap-6 flex-col pt-16 text-white" },
                            constants_1.sidebarLinks.map(function (item) {
                                var isActive = pathname === item.route || pathname.startsWith(item.route + "/");
                                return (React.createElement(sheet_1.SheetClose, { asChild: true, key: item.route },
                                    React.createElement(link_1["default"], { href: item.route, key: item.label, className: utils_1.cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive }) },
                                        React.createElement(image_1["default"], { src: item.imgURL, alt: item.label, width: 20, height: 20, className: utils_1.cn({
                                                'brightness-[3] invert-0': isActive
                                            }) }),
                                        React.createElement("p", { className: utils_1.cn('text-16 font-semibold text-black-2', { 'text-white': isActive }) }, item.label))));
                            }),
                            "USER")),
                    "FOOTER")))));
};
exports["default"] = MobileNav;
