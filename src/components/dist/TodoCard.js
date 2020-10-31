"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var dayjs_1 = require("dayjs");
var vector_icons_1 = require("@expo/vector-icons");
var relativeTime_1 = require("dayjs/plugin/relativeTime");
var ko_1 = require("dayjs/locale/ko");
dayjs_1["default"].extend(relativeTime_1["default"]);
dayjs_1["default"].locale(ko_1["default"]);
var TodoCard = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: {
            backgroundColor: 'white',
            flexDirection: 'row',
            marginLeft: 16,
            marginRight: 16
        } },
        react_1["default"].createElement(react_native_1.View, { style: { flex: 3, padding: 16 } },
            react_1["default"].createElement(react_native_1.Text, { style: { fontWeight: '900', fontSize: 24, marginBottom: 8 } }, "\uCCAD\uC18C\uD558\uAE30"),
            react_1["default"].createElement(react_native_1.Text, null, dayjs_1["default"](new Date()).fromNow())),
        react_1["default"].createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
            react_1["default"].createElement(vector_icons_1.AntDesign, { name: "checkcircle", size: 24, color: "black" }))));
};
exports["default"] = TodoCard;
