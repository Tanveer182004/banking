'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var zod_1 = require("zod");
var zod_2 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("@/components/ui/button");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var formSchema = zod_1.z.object({
    email: zod_1.z.string().email()
});
var AuthForm = function (_a) {
    var type = _a.type;
    var _b = react_1.useState(null), user = _b[0], setUser = _b[1];
    // 1. Define your form.
    var form = react_hook_form_1.useForm({
        resolver: zod_2.zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    });
    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }
    return (react_1["default"].createElement("section", { className: "auth-form" },
        react_1["default"].createElement("header", { className: "flex flex-col gap-5 md:gap-8" },
            react_1["default"].createElement(link_1["default"], { href: "/", className: "cursor-pointer items-center gap-1" },
                react_1["default"].createElement(image_1["default"], { src: "/icons/logo.svg", width: 34, height: 34, alt: "Horizon Logo" }),
                react_1["default"].createElement("h1", { className: "text-26 font-ibm-plex-serif font-bold text-black-1" }, "Horizon")),
            react_1["default"].createElement("div", { className: "flex flex-col gap-1 md:gap-3" },
                react_1["default"].createElement("h1", { className: "text-24 lg:text-36 font-semibold text-gray-900" },
                    user
                        ? 'Link Account'
                        : type === 'sign-in'
                            ? 'Sign In'
                            : 'Sign Up',
                    react_1["default"].createElement("p", { className: "text-16 font-normal text-gray-600" }, user
                        ? 'Link Your Account To Get Started'
                        : 'Please Enter Your Details')))),
        user ? (react_1["default"].createElement("div", { className: "flex flex-col gap-4" })) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(form_1.Form, __assign({}, form),
                react_1["default"].createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8" },
                    react_1["default"].createElement(form_1.FormField, { control: form.control, name: "email", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement("div", { className: "form-item" },
                                react_1["default"].createElement(form_1.FormLabel, { className: "form-label" }, "Email"),
                                react_1["default"].createElement("div", { className: "flex w-full flex-col" },
                                    react_1["default"].createElement(form_1.FormControl, null,
                                        react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Enter your email", className: "input-class" }, field))),
                                    react_1["default"].createElement(form_1.FormMessage, { className: "form-message" }))));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { control: form.control, name: "password", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement("div", { className: "form-item" },
                                react_1["default"].createElement(form_1.FormLabel, { className: "form-label" }, "Password"),
                                react_1["default"].createElement("div", { className: "flex w-full flex-col" },
                                    react_1["default"].createElement(form_1.FormControl, null,
                                        react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Enter your password", className: "input-class", type: "password" }, field))),
                                    react_1["default"].createElement(form_1.FormMessage, { className: "form-message" }))));
                        } }),
                    react_1["default"].createElement(button_1.Button, { type: "submit" }, "Submit")))))));
};
exports["default"] = AuthForm;
